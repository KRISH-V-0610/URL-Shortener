const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/urlShortener')
  .then(() => {
    console.log("MongoDb connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB: ", err);
  })

// Define the schema for the "User" collection

const urlSchema = new mongoose.Schema({

  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
}, { timestamps: true });


module.exports = mongoose.model('Url', urlSchema);