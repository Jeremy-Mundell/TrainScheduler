



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPaJg9A59VdAuDW6KjuXQNyj-ZwW5YX9s",
    authDomain: "trainscheduler-478cf.firebaseapp.com",
    databaseURL: "https://trainscheduler-478cf.firebaseio.com",
    projectId: "trainscheduler-478cf",
    storageBucket: "trainscheduler-478cf.appspot.com",
    messagingSenderId: "35697103270"
  };
  firebase.initializeApp(config);

// a var to represent the database
 var database = firebase.database();

// button to submit the train info
$("#submitTrainIfno").on("click", function(event) {
  event.preventDefault(); 
  //no button reset

  //create variables for input fields
  var trainName = $("#nameInput").val().trim();
  var destination = $("#destinationInput").val().trim();

  //converts user input to usable info
  var firstTime = moment($("#timeInput").val().trim(), "hh:mm").subtract(1, "years").format("X");

  var frequency = $("#freqInput").val().trim();
  
  //current time
  var currentTime = moment();
  console.log("CURRENT TIME: " +  moment(currentTime).format("hh:mm"));

    //combines new train information
  var newTrain = {

    train: nameInput,
    trainGoing: destinationInput,
    trainComing: timeInput,
    everyMin: freqInput
  };


  //uploads newTrain to firebase
  database.ref().push(newTrain);
  //*push* adds to info already in firebase. 
  
  //clears elements before adding new text
  $("#nameInput").val("");
  $("#destinationInput").val("");
  $("#timeInput").val("");
  $("#freq").val("");


  return false;

}); //end of onclick


database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());


    //store in variables
    var trainName = childSnapshot.val().train;
    var destination =childSnapshot.val().trainGoing;
    var firstTime = childSnapshot.val().trainComing;
    var frequency = childSnapshot.val().everyMin;


    //makes first train time neater
    var trainTime = moment.unix(firstTime).format("hh:mm");
    //calculate difference between times
    var difference =  moment().diff(moment(trainTime),"minutes");

    //time apart(remainder)
    var trainRemain = difference % frequency;

    //minutes until arrival
    var minUntil = frequency - trainRemain;

    // //next arrival time
    var nextArrival = moment().add(minUntil, "minutes").format('hh:mm');

    // //adding info to HTML table 
    // $("#newTable").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + "</td><td>"  + "</td></tr>");

//adding to HTML train schedule table 
    $("#newTable").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextArrival + "</td><td>" + minUntil + "</td></tr>");

});


