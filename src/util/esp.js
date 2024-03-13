const { generateObjectID } = require('./mongoose');

module.exports = {
    createNewESP: function (_idESP, numDevices) {
        let newESP = {
            _id: generateObjectID().toString(),
            _idESP: _idESP,
            numDevices: parseInt(numDevices),
        };
        const devices = [];
        const pinESP = ['D1', 'D2', 'D5', 'D6']

        for (let index = 0; index < parseInt(numDevices); index++) {
            const idGenerated = generateObjectID();
            const pin = {
                _id: idGenerated,
                pin: pinESP[index]
            }

            devices.push(pin);
        }
        newESP.devices = devices;

        return newESP;
    },

    getDevicesStatus: function (esp) {
        devicesStatus = []

        esp.devices.map((device) => {
            devicesStatus.push({
                "_id": device._id,
                "status": device.status
            })
        })

        return devicesStatus
    }

}