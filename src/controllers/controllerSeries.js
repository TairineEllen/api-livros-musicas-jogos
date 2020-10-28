const series = require('../models/series.json');

const getAllSeries = (req, res) => {
  res.status(200).send(series);
};

const getSerieById = (req, res) => {
  const id = req.params.id;

  try {
    const serieSelected = series.find(serie => serie.id == id);

    serieSelected ? res.status(200).send(serieSelected) : res.status(404).send('Série não encontrado');
            
  } catch (error) {
    res.status(424).send('Erro interno do servidor');    
  };
};

module.exports = {
  getAllSeries,
  getSerieById
};