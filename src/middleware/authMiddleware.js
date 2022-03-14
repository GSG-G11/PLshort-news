const { join } = require('path');
const { comparePasswords } = require('../controllers/handleHash');
const { checkToken } = require('../controllers/handleToken');
const { users } = require('../models/data.json');

module.exports = {
  authenticateToken: ({ cookies }, res, next) => {
    const { accessToken } = cookies;
    const token = accessToken && accessToken.split(' ')[1];
    if (!token) return res.status(302).redirect('/');

    try {
      return checkToken(token, process.env.ACCESS_TOKEN_SECRET)
        .then(({ email, password }) => {
          const newsFiltered = users.filter(
            ({ email: userEmail, password: userPassword }) =>
              email.trim() === userEmail.trim() &&
              comparePasswords(password.trim(), userPassword.trim()),
          );
          res.cookie('userName', email.split('@')[0]);
          return newsFiltered.length >= 1
            ? next()
            : res.status(302).redirect('/');
        })
        .catch((error) => next(error));
    } catch (error) {
      return res.status(302).redirect('/');
    }
  },

  redirectToDefault: ({ cookies }, res, next) => {
    const { accessToken } = cookies;
    const token = accessToken && accessToken.split(' ')[1];
    if (!token) return next();

    return checkToken(token, process.env.ACCESS_TOKEN_SECRET)
      .then(() => res.status(302).redirect('/home'))
      .catch(() =>
        res
          .status(401)
          .sendFile(join(__dirname, '..', '..', 'public', 'error', '401.html')),
      );
  },
};
