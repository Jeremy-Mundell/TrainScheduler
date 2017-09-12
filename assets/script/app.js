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

  $("#s").on("click", function(){

// here we are creating variables that correspond to the input boxes
  	var nameInput = $("#nameInput").val(),trim();
  	var destinationInput = $("#destinationInput").val(),trim();
  	var timeInput = $("#timeInput").val(),trim();
  	var freqInput = $("#freqInput").val(),trim();

  	//next we want to combine all the input variables in to a single variable

  	var newTrain = {
  		name : nameInput,
  		destination : destinationInput,
  		time : timeInput,
  		frequency : freqInput
  	}

  	// push the input data to Firebase

  	database.ref().push(newTrain);


  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);


  //clearing the input from the previous train for the next train input

  $("#nameInput").val("");
  $("#destinationInput").val("");
  $("#timeInput").val("");
  $("#frequencyInput").val("");



  });
 