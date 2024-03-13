const express = require('express');
const router = express.Router();

const espController = require('../app/controllers/ESPController');

// /connect/:id?numPort=
router.get('/all', espController.getAllESPs);

router.get('/connect/:id', espController.connect);
router.post('/:id', espController.post);
router.get('/:id', espController.get);



module.exports = router;