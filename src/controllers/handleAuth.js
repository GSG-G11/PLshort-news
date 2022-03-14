const { join } = require('path');
const { writeFileSync } = require('fs');
const data = require('../models/data.json');
const { hashPassword, comparePasswords } = require('./handleHash');
const usersArray = require('../models/data.json');
const { generateToken } = require('./handleToken');

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

      generateToken(newUser, process.env.ACCESS_TOKEN_SECRET)
        .then((token) => {
          res
            .status(301)
            .cookie('accessToken', `Bearer ${token}`)
            .redirect('/home');
        })
        .catch((error) => {
          next(error);
        });
    } catch (err) {
      next(err);
    }
  },
  login: async ({ body }, res, next) => {
    const { email, password } = body;
    const { users } = usersArray;
    const newsFiltered = users.filter(
      ({ email: userEmail, password: userPassword }) =>
        email.trim() === userEmail.trim() &&
        comparePasswords(password.trim(), userPassword.trim()),
    );

    if (newsFiltered.length >= 1) {
      const newUser = { email, password: await hashPassword(password) };
      generateToken(newUser, process.env.ACCESS_TOKEN_SECRET)
        .then((token) => {
          res
            .status(301)
            .cookie('accessToken', `Bearer ${token}`)
            .redirect('/home');
        })
        .catch((error) => {
          next(error);
        });
    } else {
      res.status(401).sendFile(join(relativePath, 'error', '401.html'));
    }
  },

  logout: (_, res, next) => {
    try {
      res.clearCookie('accessToken').clearCookie('userName').redirect('/');
    } catch (err) {
      next(err);
    }
  },
};
