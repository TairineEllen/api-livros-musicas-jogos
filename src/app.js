const express = require('express');
const app = express();

app.use(express.json());

const index = require('./routes/index');
const jogos = require('./routes/routeJogos');
const musicas = require('./routes/routeMusicas');
const artistas = require('./routes/routeArtists');
const albuns = require('./routes/routeRecords');
const series = require('./routes/routeSeries');

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, x-Request-With, Content-Type, Accept'
  );
  console.info('Nova requisicao realizada');
  next();
});

app.use('/', index);
app.use('/jogos', jogos);
app.use('/musicas', musicas);
app.use('/artistas', artistas);
app.use('/albuns', albuns);
app.use('/series', series);

module.exports = app;