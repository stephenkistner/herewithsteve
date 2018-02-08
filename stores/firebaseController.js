module.exports = store
var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyDp-6_yrVaghIudJf-gVA8UU1G6i5bzIq0",
    authDomain: "here-19d5a.firebaseapp.com",
    databaseURL: "https://here-19d5a.firebaseio.com",
    projectId: "here-19d5a",
    storageBucket: "",
    messagingSenderId: "966210783243"
  };
  firebase.initializeApp(config);

var fireBaseFailed = false

var database = firebase.database()

  function store(state,emitter) {

    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      fireBaseFailed = true
      // ...
    });

    emitter.on('DOMContentLoaded', function () {

      emitter.on('firebase:steveclick', function() {
        if (!fireBaseFailed) {
          var addSteveClick = firebase.database().ref('steveClicks');
          addSteveClick.transaction(function(currentClicks) {
            // If users/ada/rank has never been set, currentRank will be `null`.
            return currentClicks + 1;
          });
        }
      })

      emitter.on('firebase:quizclick', function(data){
        if (!fireBaseFailed) {
          var dataRef = data.quiz + '/' + data.response
          var incrementQuizResponse = firebase.database().ref(dataRef);
          incrementQuizResponse.transaction(function(currentClicks) {
            // If users/ada/rank has never been set, currentRank will be `null`.
            return currentClicks + 1;
          });
        }
      })



    })


  }
