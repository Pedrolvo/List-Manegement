require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = process.env.SERVER_PORT | 3001;

app.use(express.json());
app.use(routes);
app.get('/', (req, res) => {
  return res.send('<h1>Testando!!!</h1>')
})

app.listen(PORT, () => console.log(`${PORT}`));