var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/data.json', function(req, res, next) {
  
  var produtos = [
    {
      identificador: "graphicTest",
      nome: "teste",
      descricao: "uma descricao de teste 1",
      valores:[
        {
          marca: "A",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "B",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "C",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "D",
          preco: Math.round((Math.random() * 100) * 100) / 100
        }
      ]
    },

    {
      identificador: "graphicTest2",
      nome: "teste",
      descricao: "uma descricao de teste 2",
      valores:[
        {
          marca: "A",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "B",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "C",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "D",
          preco: Math.round((Math.random() * 100) * 100) / 100
        }
      ]
    },

    {
      identificador: "graphicTest3",
      nome: "teste",
      descricao: "uma descricao de teste 3",
      valores:[
        {
          marca: "A",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "B",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "C",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "D",
          preco: Math.round((Math.random() * 100) * 100) / 100
        }
      ]
    },

    {
      identificador: "graphicTest4",
      nome: "teste",
      descricao: "uma descricao de teste 4",
      valores:[
        {
          marca: "A",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "B",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "C",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "D",
          preco: Math.round((Math.random() * 100) * 100) / 100
        }
      ]
    },

    {
      identificador: "graphicTest5",
      nome: "teste",
      descricao: "uma descricao de teste 5",
      valores:[
        {
          marca: "A",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "B",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "C",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "D",
          preco: Math.round((Math.random() * 100) * 100) / 100
        }
      ]
    },

    {
      identificador: "graphicTest6",
      nome: "teste",
      descricao: "uma descricao de teste 6",
      valores:[
        {
          marca: "A",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "B",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "C",
          preco: Math.round((Math.random() * 100) * 100) / 100
        },
        {
          marca: "D",
          preco: Math.round((Math.random() * 100) * 100) / 100
        }
      ]
    }
  ]

  res.json(produtos);
});

module.exports = router;
