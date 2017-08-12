/**
 * Importando Express.
 * Framework para apricação web.
 */
var express = require('express');

/**
 * Importando Path.
 * Módulo para trabalhar com arquivos e diretórios.
 */
var path = require('path');

/**
 * Importando Serve-Favicon.
 * Middleware express para implemetação de icones.
 */
var favicon = require('serve-favicon');

/**
 * Importando Morgan.
 * Middleware express para Log's de requisições http.
 */
var logger = require('morgan');

/**
 * Importando Cookie-Parser.
 * Middleware express para conversão do cookie para JSON (req.cookie).
 */
var cookieParser = require('cookie-parser');

/**
 * Importando Body-Parser.
 * Middleware express para conversão de requisições http para JSON (req.body).
 */
var bodyParser = require('body-parser');

/**
 * Importando rotas 'index'.
 */
var index = require('./routes/index');

/**
 * Importando rotas 'produtos'.
 */
var produtos = require('./routes/produtos');

/**
 * Iniciando Express.
 */
var app = express();

/**
 * Definindo Views (diretório na primeira linha / modelo na segunda linha).
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Definindo Icone da página (Iniciando middleware serve-favicon).
 */
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/**
 * Iniciando middleware morgan.
 */
app.use(logger('dev'));

/**
 * Iniciando middleware body-parser.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Iniciando middleware cookie-parser.
 */
app.use(cookieParser());

/**
 * Definindo diretório de arquivos publicos da página.
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Definindo a rota 'index' como a inicial.
 */
app.use('/', index);

/**
 * Definindo a rota 'produtos'.
 */
app.use('/produtos', produtos);

/**
 * Definindo função para gerenciar erros 404.
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Definindo função para capturar erros.
 */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {mensagem: err.message});
});

module.exports = app;
