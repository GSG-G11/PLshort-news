const express = require('express');
const { join } = require('path');
const compression = require('compression');
const { hidePoweredBy } = require('helmet');
const cookieParser = require('cookie-parser');
const router = require('./routes/index');
const middlewareAuth = require('./controllers/middleware');

module.exports = (app) => {
  app.use(cookieParser());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(hidePoweredBy());

  app.use(middlewareAuth);
  // set cache age (maxAge) to 30 days
  app.use(
    express.static(join(__dirname, '..', 'public'), {
      maxAge: '30d',
    }),
  );

  app.use(router);
};
