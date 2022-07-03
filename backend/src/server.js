require('dotenv').config();
const app = require('./app.js');

const PORT = process.env.SERVER_PORT || 3003;



app.listen(PORT, () => console.log(`${PORT}`));