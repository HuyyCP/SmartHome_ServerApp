//Defining a Model

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Device = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    isConnected: { type: Boolean, default: false },
}, {
    timestamps: true,
});

const Room = new Schema({
    name: { type: String, required: true },
    numDevices: { type: Number },
    numConnected: { type: Number },
    devices: [Device]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Room', Room);