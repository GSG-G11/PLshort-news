const { join } = require('path');
const { compareSync } = require('bcryptjs');

const { users } = require('../models/data.json');

const cookiesValue = '$N4NpoN4020$N4NpoB8hZzGxGGJhvFeW';
const isAuth = (cookies, value) => {
  if ('session_id' in cookies) {
    return cookies.session_id === value;
  }
  return false;
};

const middlewareAuth = ({ method, url, body, cookies }, res, next) => {
  if (url === '/api/login' && method === 'POST') {
    const { password, email } = body;
    const newsFiltered = users.filter(
      ({ email: userEmail, password: userPassword }) => {
        const checkEmail = email.trim() === userEmail.trim();
        const checkPassword = compareSync(password.trim(), userPassword.trim());
        return checkEmail && checkPassword;
      },
    );

    if (newsFiltered.length >= 1) {
      res.cookie('session_id', cookiesValue);
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
  } else if (
    url === '/home' ||
    url === '/api/news/search' ||
    url === '/api/news'
  ) {
    if (isAuth(cookies, cookiesValue)) {
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
  } else if (
    url === '/' ||
    url === '/api/login' ||
    url === '/api/register' ||
    url === '/register'
  ) {
    if (!isAuth(cookies, cookiesValue)) {
      next();
    } else {
      try {
        res.redirect('/home');
      } catch (err) {
        next(err);
      }
    }
  } else {
    next();
  }
};

module.exports = middlewareAuth;
