// alert("I work");

 

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
  console.log(firebase);

  var database = firebase.database();

//global variable traindata
  var trainData;

  database.ref().on("value", function(snapshot){
    //grab updated train data for firebase
    traindata = snapshot.val();

    //refresh HTML table data
    refreshTable();
  });


  //creating a function for the submit button
  $("#submitTrainInfo").on("click",function(){

// here we are creating variables that correspond to the input boxes
  	var nameInput = $("#nameInput").val().trim();
  	var destinationInput = $("#destinationInput").val().trim();
  	var timeInput = $("#timeInput").val().trim();
  	var freqInput = $("#freqInput").val().trim();

 //push data from form to firebase DB
  database.ref().push({
              train: nameInput,
              destination: destinationInput,
              time: timeInput,
              frequency: freqInput
          });


// console.log(database.ref);


  //clearing the input from the previous train for the next train input

  $("#nameInput").val("");
  $("#destinationInput").val("");
  $("#timeInput").val("");
  $("#frequencyInput").val("");


return false;
  });
 

 function refreshTable(){

//clear data from table
  $(".table-body-row").empty();

  //
var arrayOfObjects = [];

var arrayOfTimes = [];

// $.each(data, function(key, value){

//   var nameInput = value.nameInput;
//   var destinationInput = value.destination;
//   var timeInput = value.timeInput;
//   var freqInput = value.freqInput;


}
 