const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    endpointsJogos: [
      'jogos',
      'jogos/id'
    ],
    enpointsMusicas: [
      'musicas',
      'musicas/id'
    ],
    enpointsArtistas: [
      'artistas',
      'artistas/id'
    ],
    enpointsAlbuns: [
      'albuns',
      'albuns/[nome do album]'
    ],
    enpointsAeries: [
      'series',
      'series/id'
    ]
  });
});

module.exports = router;