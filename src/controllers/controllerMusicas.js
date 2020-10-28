const musics = require('../models/musicas.json');

const getAllMusics = (req, res) => {
  res.status(200).send(musics);
};

const getMusicById = (req, res) => {
  const id = req.params.id;
  try {
    const musicSelected = musics.find(music => music.id == id);

    musicSelected ? res.status(200).send(musicSelected) : res.status(404).send('Música não encontrada');

  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const allArtists = (arr) => {
  const listArtists = [];
  arr.forEach(music => {
    if (listArtists.indexOf(music.artista) === -1) {
      listArtists.push(music.artista)
    };
  });

  const artists = listArtists.map(artist => ({
    id: listArtists.indexOf(artist) + 1,
    artista: artist
  }));

  return artists;
};

const getAllArtists = (req, res) => {
  try {
    const artists = allArtists(musics);
    res.status(200).send(artists);
  } catch (error) {
    res.status(424).send('Erro interno no servidor');
  };
};

const getArtistById = (req, res) => {
  const id = req.params.id;
  const artists = allArtists(musics);
  try {
    const artistSelected = artists.find(artist => artist.id == id);
    if (artistSelected) {
      const musicsArtist = musics.filter(music => music.artista == artistSelected.artista);
      res.status(200).send({
        artista: artistSelected,
        musicas: musicsArtist
      });        
    } else {
      res.status(424).send('Artista não encontrado')
    }     
    
  } catch (error) {
    res.status(424).send('Erro interno no servidor');    
  };
};

module.exports = {
  getAllMusics,
  getMusicById,
  getAllArtists,
  getArtistById
};