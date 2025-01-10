// Models
const URL = require('../models/url');

const shortId = require('shortid');
// console.log(shortId);

const handlePostUrl = async (req, res) => {

  const { originalUrl } = req.body;



  const existingEntry = await URL.findOne({ originalUrl });
  if (existingEntry) {
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}/${existingEntry.shortUrl}`;
    return res.render('homepage', { originalUrl: existingEntry.originalUrl, shortUrl: fullUrl, link: true });
  }

  const user = await URL.create({
    shortUrl: shortId.generate(),
    originalUrl: originalUrl
  })

  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}/${user.shortUrl}`;
  res.render('homepage', { originalUrl: user.originalUrl, shortUrl: fullUrl, link: true });
}

// Handle GET request for shortened URL
const handleShortenedGetUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const user = await URL.findOne({ shortUrl });

  if (user) {
    res.redirect(user.originalUrl);
  } else {
    res.status(404).send('Short URL not found');
  }
}

const handleGetUrl = (req, res) => {
  res.render('homepage', { originalUrl: '', shortUrl: '', link: false });
}

module.exports = {
  handlePostUrl, handleGetUrl, handleShortenedGetUrl
}