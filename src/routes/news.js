const express = require('express');

const news = express();

const { getNews } = require('../controllers/handleNews');

news.route('/api/news').post(getNews);

module.exports = news;
