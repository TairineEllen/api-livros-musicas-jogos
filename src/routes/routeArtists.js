const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerMusicas');

router.get('/', controller.getAllArtists);

module.exports = router;