const fetch = require('node-fetch');
const { join } = require('path');

const getHomePage = (req, res, next) => {
  try {
    res.sendFile(join(__dirname, '..', '..', 'public', 'news.html'));
  } catch (err) {
    next(err);
  }
};

const fetchNews = async (category, method) => {
  const query = new URLSearchParams({ category });
  const url = `https://inshortsapi.vercel.app/news?${query}`;
  const options = { method };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

const getNews = async ({ body }, res) => {
  const { category } = body;

  fetchNews(category, 'GET').then((data) => {
    if (data.success === false) {
      res.status(404).json(data.error);
    } else {
      res.status(201).json(data);
    }
  });
};

const handleMiddleware = (req, res) => {
  res.redirect('/home');
};

module.exports = { getHomePage, getNews, handleMiddleware };
