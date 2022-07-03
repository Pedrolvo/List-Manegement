const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
  return res.send('<h1>Testando!!!</h1>')
})

module.exports = app;