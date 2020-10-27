const express = require('express');
const app = require('../app');
const router = express.Router();
const controller = require('../controllers/controllerJogos');

router.get('/', controller.getAllGames);

module.exports = router;