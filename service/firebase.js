var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAmq7LwUe_CvYObMskV-VbUjJB5QArKm0M",
    authDomain: "boiling-inferno-1102.firebaseapp.com",
    databaseURL: "https://boiling-inferno-1102.firebaseio.com",
    projectId: "boiling-inferno-1102",
    storageBucket: "boiling-inferno-1102.appspot.com",
    messagingSenderId: "1047139926898"
  };

firebase.initializeApp(config);

module.exports = firebase;