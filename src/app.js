const express = require('express');
const init = require('./init');

require('env2')('.env');

const app = express();

app.set('port', process.env.PORT || 3000);

init(app);

module.exports = app;
