const express = require('express');
const error = require('./error');
const news = require('./news');
const login = require('./login');

const router = express();

router.use(login);
router.use(news);

// ------------------*** *** --------------- Error ----------*** ----- *** ------------------
router.use(error);

module.exports = router;
