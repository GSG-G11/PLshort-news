const { join } = require('path');
const { users } = require('../models/data.json');

const middlewareAuth = ({ method, url, body }, res, next) => {
  if (url === '/api/login' && method === 'POST') {
    const newsFiltered = users.filter(
      ({ email: userEmail, password: userPassword }) => {
        const { password, email } = body;
        const checkEmail = email.trim() === userEmail.trim();
        const checkPassword = password.trim() === userPassword.trim();
        return checkEmail && checkPassword;
      },
    );

    if (newsFiltered.length >= 1) {
      next();
    } else {
      try {
        res
          .status(401)
          .sendFile(join(__dirname, '..', '..', 'public', 'error', '401.html'));
      } catch (err) {
        next(err);
      }
    }
  } else {
    next();
  }
};

module.exports = middlewareAuth;
