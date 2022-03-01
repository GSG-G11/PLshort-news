const { join } = require('path');

const middlewareAuth = ({ method, url, body }, res, next) => {
  if (url === '/api/login' && method === 'POST') {
    const { password, email } = body;
    if (email === 'Admin_123@admin.com' && password === 'Admin_123@admin.com') {
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
