const { join } = require('path');
const { writeFileSync } = require('fs');
const { sign } = require('jsonwebtoken');
const data = require('../models/data.json');
const { hashPassword, comparePasswords } = require('./handleHash');
const usersArray = require('../models/data.json');

const relativePath = `${__dirname}/../../public/`;

module.exports = {
  getHomePage: (_, res, next) => {
    try {
      res.sendFile(join(relativePath, 'news.html'));
    } catch (err) {
      next(err);
    }
  },
  getRegisterPage: (_, res, next) => {
    try {
      res.sendFile(join(relativePath, 'register.html'));
    } catch (err) {
      next(err);
    }
  },
  register: async (req, res, next) => {
    const { users } = data;
    const { email, password } = req.body;

    // get the Id of the last user to generate a new Id
    const newUserId = users.length <= 0 ? 1 : users[users.length - 1].id + 1;

    const newUser = {
      id: newUserId,
      email: email.trim(),
      password: await hashPassword(password.trim()),
    };

    // add the new User to the data object
    data.users.push(newUser);

    try {
      writeFileSync(
        join(__dirname, '..', 'models', 'data.json'),
        `${JSON.stringify(data, null, 2)}\n`,
      );
      const accessToken = sign(
        { email: newUser.email, password: newUser.password },
        process.env.ACCESS_TOKEN_SECRET,
      );
      res.cookie('accessToken', `Bearer ${accessToken}`).redirect('/home');
    } catch (err) {
      next(err);
    }
  },
  login: async ({ body }, res) => {
    const { email, password } = body;
    const { users } = usersArray;
    const newsFiltered = users.filter(
      ({ email: userEmail, password: userPassword }) =>
        email.trim() === userEmail.trim() &&
        comparePasswords(password.trim(), userPassword.trim()),
    );

    if (newsFiltered.length >= 1) {
      const newUser = { email, password: await hashPassword(password) };
      const accessToken = sign(newUser, process.env.ACCESS_TOKEN_SECRET);
      res
        .status(301)
        .cookie('accessToken', `Bearer ${accessToken}`)
        .redirect('/home');
    } else {
      res.status(401).sendFile(join(relativePath, 'error', '401.html'));
    }
  },

  logout: (_, res, next) => {
    try {
      res.clearCookie('accessToken');
      res.redirect('/');
    } catch (err) {
      next(err);
    }
  },
};
