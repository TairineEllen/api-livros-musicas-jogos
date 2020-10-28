const musics = require('../models/musicas.json');

const getAllMusics = (req, res) => {
  res.status(200).send(musics);
};

const getMusicById = (req, res) => {
  const id = req.params.id;

  try {
    const musicSelected = musics.find(music => music.id == id);
    if (musicSelected) {
      res.status(200).send(musicSelected);
    } else {
      res.status(404).send('Música não encontrada')
    };
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const getAllArtists = (req, res) => {
  try {
    const listArtists = [];

    musics.forEach(music => {
      if (listArtists.indexOf(music.artista) === -1) {
        listArtists.push(music.artista)
      };
    });

    const artists = listArtists.map(artist => ({
      id: listArtists.indexOf(artist) + 1,
      artista: artist
    }));

    res.status(200).send(artists)
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

module.exports = {
  getAllMusics,
  getMusicById,
  getAllArtists
};