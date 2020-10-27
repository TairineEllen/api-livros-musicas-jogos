const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerJogos');

router.get('/', controller.getAllGames);
router.get('/:id', controller.getGameById);

module.exports = router;