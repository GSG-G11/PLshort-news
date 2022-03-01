const express = require('express');

const news = express();

const { getHomePage, getNews } = require('../controllers/handleNews');

news.route('/home').get(getHomePage);

news.route('/api/news').post(getNews);

module.exports = news;
