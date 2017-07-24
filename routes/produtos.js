var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/data.json', function(req, res, next) {
  
  var produtos = [
    {
      identificador: "graphicTest",
      nome: "teste",
      valor: 12.75,
      descricao: "uma descricao de teste 1"
    },
    {
      identificador: "graphicTest2",
      nome: "teste",
      valor: 11.75,
      descricao: "uma descricao de teste 2"
    },
    {
      identificador: "graphicTest3",
      nome: "teste",
      valor: 10.75,
      descricao: "uma descricao de teste 3"
    },
    {
      identificador: "graphicTest4",
      nome: "teste",
      valor: 19.75,
      descricao: "uma descricao de teste 4"
    },
    {
      identificador: "graphicTest5",
      nome: "teste",
      valor: 10.75,
      descricao: "uma descricao de teste 5"
    },
    {
      identificador: "graphicTest6",
      nome: "teste",
      valor: 11.75,
      descricao: "uma descricao de teste 6"
    }
  ]

  res.json(produtos);
});

module.exports = router;
