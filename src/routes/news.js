const express = require('express');

const news = express();

const getHomePage = require('../controllers/handleNews');

news.route('/home').get(getHomePage);

module.exports = news;
