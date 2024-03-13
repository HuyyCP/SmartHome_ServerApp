const express = require('express');
const router = express.Router();

const espController = require('../app/controllers/ESPController');

// /connect/:id?numPort=
router.get('/all', espController.getAllESPs);

router.get('/connect/:idESP', espController.connect);
router.post('/:idESP', espController.post);
router.get('/:idESP', espController.get);



module.exports = router;