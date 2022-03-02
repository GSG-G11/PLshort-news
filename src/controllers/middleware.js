const { join } = require('path');
const { users } = require('../models/data.json');

const middlewareAuth = ({ method, url, body }, res, next) => {
  if (url === '/api/login' && method === 'POST') {
    const cloneUsers = JSON.parse(JSON.stringify(users));
    const { password, email } = body;

    cloneUsers.forEach(({ email: userEmail, password: userPassword }) => {
      if (userEmail === email && userPassword === password) {
        next();
      } else {
        try {
          res
            .status(401)
            .sendFile(
              join(__dirname, '..', '..', 'public', 'error', '401.html'),
            );
        } catch (err) {
          next(err);
        }
      }
    });
  } else {
    next();
  }
};

module.exports = middlewareAuth;
