const { join } = require('path');

const getHomePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'news.html'));
};

module.exports = getHomePage;
