const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerMusicas');

router.get('/', controller.getAllMusics);
router.get('/:id', controller.getMusicById);

module.exports = router;