const express = require('express');

const auth = express.Router();

const {
  login,
  register,
  getRegisterPage,
  logout,
} = require('../controllers/handleAuth');

auth.get('/logout', logout);
auth.post('/api/login', login);
auth.post('/api/register', register);
auth.get('/register', getRegisterPage);

module.exports = auth;
