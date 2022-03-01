const express = require('express');

const news = express();

const {
  getHomePage,
  getNews,
  handleMiddleware,
} = require('../controllers/handleNews');

news.route('/home').get(getHomePage);

news.route('/api/login').post(handleMiddleware);

news.route('/api/news').post(getNews);

module.exports = news;
