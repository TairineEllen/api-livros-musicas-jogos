const musics = require('../models/musicas.json');

const getAllMusics = (req, res) => {
  res.status(200).send(musics);
};

module.exports = {
  getAllMusics
};