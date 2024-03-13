const Room = require('../models/Room');
const { multipleMongooseToObject } = require('../../util/mongoose');

class RoomController {

    // [GET] rooms 
    // get all rooms
    async allRooms(req, res, next) {
        try {
            const rooms = await Room.find({});
            res.json(rooms);
        } catch (error) {
            next(error)
        }
    }

    // [GET] rooms/:id
    // get room by ObjectID
    async roomByID(req, res, next) {
        Room.findById(req.params.id)
            .populate('ESPs')
            .then((room) => {
                if (room) {
                    res.json(room);
                }
            }).catch(next);
    }

}


module.exports = new RoomController; // Tạo một instance cho RoomController

//const RoomController = require('./RoomController');