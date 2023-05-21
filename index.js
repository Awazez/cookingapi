const express = require('express');
const cors = require("cors")

const foo = require('./data/recette.json');


const app = express();

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  return res.send(foo);
});



// NOTE - run 'nodemon server' to start server (live update) or node server.js
const PORT = 3000;
app.listen(PORT, function () {
  console.log('Server is running on Port: '+ PORT);
});

