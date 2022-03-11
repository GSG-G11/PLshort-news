const express = require('express');

const login = express();

const {
  getHomePage,
  handleMiddleware,
  addUser,
  getRegisterPage,
  logout
} = require('../controllers/handleAuth');

login.route('/home').get(getHomePage);
login.route('/logout').get(logout);

login.route('/api/login').post(handleMiddleware);

login.route('/api/register').post(addUser);
login.route('/register').get(getRegisterPage);

module.exports = login;
