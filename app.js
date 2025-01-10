//Core Modules
const path = require('path');

const express = require('express');
const app = express();


app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));
  
// Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//setting route for static frontend files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
const URLrouter = require('./routes/url');

// Define routes
app.use(URLrouter);


app.listen(3000, () => {
  console.log('Server is running on port: http://localhost:3000');
})
