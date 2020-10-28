const express = require('express');
const app = express();

app.use(express.json());

const jogos = require('./routes/routeJogos');
const musicas = require('./routes/routeMusicas');
const artistas = require('./routes/routeArtists');

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
app.use('/musicas', musicas);
app.use('/artistas', artistas);

module.exports = app;