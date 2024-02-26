const express = require('express');
const router = express.Router();

const roomController = require('../app/controllers/RoomController');

// courseController
router.get('/:id', roomController.roomByID);
router.get('/', roomController.allRooms);

module.exports = router;