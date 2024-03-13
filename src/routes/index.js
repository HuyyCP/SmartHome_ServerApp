const siteRouter = require('./site');
const roomsRouter = require('./rooms');
const espsRouter = require('./ESP');

function route(app) {
    /*

    Paramerters
        app: express Instance
    */

    app.use('/esps', espsRouter);

    app.use('/rooms', roomsRouter);

    app.use('/', siteRouter);
}

module.exports = route;