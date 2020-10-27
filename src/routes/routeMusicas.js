const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerMusicas');

router.get('/', controller.getAllMusics);

module.exports = router;