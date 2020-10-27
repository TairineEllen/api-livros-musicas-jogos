const games = require('../models/jogos.json');

const getAllGames = (req, res) => {
  res.status(200).send(games);
};

const getGameById = (req, res) => {
  const id = req.params.id;

  try {
    const gameSelected = games.find(game => game.id == id);
    if (gameSelected){
      res.status(200).send(gameSelected);
    } else {
      res.status(404).send('Jogo não encontrado');
    };        
  } catch (error) {
    res.status(424).send('Erro interno do servidor');    
  };
};

module.exports = {
  getAllGames,
  getGameById
};