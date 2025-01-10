const express = require('express');
const app = express();


// Middleware to parse JSON request bodies

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define routes

app.get('/',(req,res)=>{
  res.send('Hello, World!');
})

app.listen(3000, () => {
  console.log('Server is running on port: http://localhost:3000');
})
