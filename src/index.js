
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;


const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

//apply middleware
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());


// Static file: directory of Static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined')); // Show log middleware http request

// Template engine
app.engine('hbs', engine({ extname: ".hbs" }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`My app listening on port http://localhost:${port}`);
});