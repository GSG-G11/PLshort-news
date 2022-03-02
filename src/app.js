const express = require('express');
const { join } = require('path');
require('env2')('.env');
const compression = require('compression');
const { hidePoweredBy } = require('helmet');
const router = require('./routes/index');
const middlewareAuth = require('./controllers/middleware');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(hidePoweredBy());

// set cache age (maxAge) to 30 days
app.use(
  express.static(join(__dirname, '..', 'public'), {
    maxAge: '30d',
  }),
);

app.use(middlewareAuth);

app.use(router);

module.exports = app;
