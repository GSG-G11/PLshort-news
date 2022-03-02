const express = require('express');

const news = express();

const { getNews, handleSearch } = require('../controllers/handleNews');

news.route('/api/news').post(getNews);
news.route('/api/news/search').post(handleSearch);

module.exports = news;
