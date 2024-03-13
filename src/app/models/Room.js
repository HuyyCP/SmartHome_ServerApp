//Defining a Model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Device = new Schema({
//     name: { type: String, required: false },
//     pin: { type: String, required: true },
//     type: { type: String, required: false, default: "FAN" }, // FAN, DOOR, LIGHT
//     isConnected: { type: Boolean, default: true },
//     status: { type: Number, default: 0 } // -1: notConnected, 0: OFF, 1: ON
// }, {
//     timestamps: true,
// });

const Room = new Schema({
    name: { type: String, required: true },
    numDevices: { type: Number },
    numConnected: { type: Number },
    ESPs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'esp' }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Room', Room);