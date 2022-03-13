const express = require('express');
const { getHomePage } = require('../controllers/handleAuth');

const router = express.Router();

const { getNews, handleSearch } = require('../controllers/handleNews');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/home', authenticateToken, getHomePage);
router.post('/api/news', authenticateToken, getNews);
router.post('/api/news/search', authenticateToken, handleSearch);

module.exports = router;
