const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerMusicas');

router.get('/', controller.getAllArtists);
router.get('/:id', controller.getArtistById);

module.exports = router;