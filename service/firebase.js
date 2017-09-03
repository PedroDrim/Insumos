var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyA2lPvHgwMETn46WFzH-7HEIo6ML2_PGnc",
  authDomain: "planeje-insumos-d55a4.firebaseapp.com",
  databaseURL: "https://planeje-insumos-d55a4.firebaseio.com",
  projectId: "planeje-insumos-d55a4",
  storageBucket: "planeje-insumos-d55a4.appspot.com",
  messagingSenderId: "250769791043"
};

firebase.initializeApp(config);

module.exports = firebase;