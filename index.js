//main server file index.js
//All backend code has been developed using Mosh Hamedani Node js tutorials

const winston = require('winston');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;