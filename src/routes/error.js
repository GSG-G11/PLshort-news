const express = require('express');

const error = express();

const {
  handleErrorNotFound,
  handleErrorServer,
} = require('../controllers/handleError');

error.use(handleErrorNotFound);

error.use(handleErrorServer);

module.exports = error;
