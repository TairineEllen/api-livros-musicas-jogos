const express = require('express');
const app = express();

app.use(express.json());

const jogos = require('./routes/routeJogos');

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, x-Request-With, Content-Type, Accept'
  );
  console.info('Nova requisicao realizada');
  next();
});

app.use('/jogos', jogos);

module.exports = app;