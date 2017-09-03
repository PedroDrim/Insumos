var express = require('express');
var firebase = require('../service/firebase');
var router = express.Router();

/* GET users listing. */
router.get('/data.json', function(req, res, next) {
  
  var reference = firebase.database().ref("/Base/Produtos");
  reference.once("value").then(function(snapshot) {
    res.json(snapshot.val());
  });
});

module.exports = router;
