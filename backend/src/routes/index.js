const routes = require('express').Router();

const routerLogin = require('./login');

routes.use('/login', routerLogin)

module.exports = routes;