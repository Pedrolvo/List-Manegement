require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'trybe',
    password: process.env.DB_PASSWORD || 'trybe124',
    database: process.env.DB_NAME || 'EBYTR',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  }
}