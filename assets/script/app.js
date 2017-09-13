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


//created the variable "database"
  var database = firebase.database();

  //creating a function for the submit button

  $("#submitTrainInfo").on("click",function(){

// here we are creating variables that correspond to the input boxes
  	var nameInput = $("#nameInput").val().trim();
  	var destinationInput = $("#destinationInput").val().trim();
  	var timeInput = $("#timeInput").val().trim();
  	var freqInput = $("#freqInput").val().trim();

 //add data from form and add it to firebase DB
  database.push({
              nameInput: train,
              destinationInput: destination,
              timeInput: time,
              freqInput: frequency
          })


console.log(database.push);

  //next we want to combine all the input variables in to a single variable



  // push the input data to Firebase

  	database.ref().push(database);

  //clearing the input from the previous train for the next train input

  $("#nameInput").val("");
  $("#destinationInput").val("");
  $("#timeInput").val("");
  $("#frequencyInput").val("");



  });
 