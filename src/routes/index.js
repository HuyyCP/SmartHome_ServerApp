const siteRouter = require('./site');
const roomsRouter = require('./rooms');

function route(app) {
    /*

    Paramerters
        app: express Instance
    */

    app.use('/rooms', roomsRouter);

    app.use('/', siteRouter);
}

module.exports = route;