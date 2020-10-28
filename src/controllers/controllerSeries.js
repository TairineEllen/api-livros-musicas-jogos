const series = require('../models/series.json');

const getAllSeries = (req, res) => {
  res.status(200).send(series);
};  

module.exports = {
  getAllSeries,
};