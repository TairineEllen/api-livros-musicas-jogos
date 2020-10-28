const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerMusicas');

router.get('/', controller.getlAllRecords);
router.get('/:nome', controller.getRecord);

module.exports = router;
