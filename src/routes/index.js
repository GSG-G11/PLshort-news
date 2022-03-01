const express = require('express');
const error = require('./error');
const news = require('./news');

const router = express();

router.use(news);

// ------------------*** *** --------------- Error ----------*** ----- *** ------------------
router.use(error);

module.exports = router;
