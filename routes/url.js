const express = require('express');

const router = express.Router();
const { handlePostUrl, handleGetUrl, handleShortenedGetUrl } = require('../controllers/url');


router.get('/url', handleGetUrl);
router.post('/url', handlePostUrl);
router.get('/url/:shortUrl', handleShortenedGetUrl);

module.exports = router;