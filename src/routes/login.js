const express = require('express');

const auth = express.Router();

const {
  login,
  register,
  getRegisterPage,
  logout,
} = require('../controllers/handleAuth');
const { redirectToDefault, authenticateToken } = require('../middleware/authMiddleware');

auth.get('/logout', authenticateToken, logout);
auth.post('/api/login', redirectToDefault, login);
auth.post('/api/register', redirectToDefault, register);
auth.get('/register', redirectToDefault, getRegisterPage);

module.exports = auth;
