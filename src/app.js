const express = require('express');
const { join } = require('path');
require('env2')('.env');
const compression = require('compression');
const router = require('./routes/index');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set cache age (maxAge) to 30 days
app.use(
  express.static(join(__dirname, '..', 'public'), {
    maxAge: '30d',
  }),
);

app.use(router);

module.exports = app;
