const games = require('../models/jogos.json');

const getAllGames = (req, res) => {
  res.send(games);
};

module.exports = {
  getAllGames
};