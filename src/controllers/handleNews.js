const fetch = require('node-fetch');

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

const handleSearch = async ({ body }, res) => {
  const { category, query } = body;

  fetchNews(category, 'GET').then((dataNews) => {
    const { data } = dataNews;
    if (dataNews.success === false) {
      res.status(404).json(dataNews.error);
    } else {
      const newsFiltered = data.filter((news) => {
        const { content, title } = news;
        // const titleLowerCase = title.toLowerCase();
        // const contentLowerCase = content.toLowerCase();
        const queryLowerCase = query.toLowerCase();
        const resultContent = content.toLowerCase().startsWith(queryLowerCase);
        const resultTitle = title.toLowerCase().startsWith(queryLowerCase);
        return resultContent || resultTitle;
      });
      if (newsFiltered.length <= 0) {
        res.status(201).json({
          data: [],
          success: true,
          message: "Sorry, No information's",
        });
        return;
      }
      res.status(201).json(newsFiltered);
    }
  });
};

module.exports = {
  getNews,
  handleSearch,
};
