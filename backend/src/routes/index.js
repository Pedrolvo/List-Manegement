const routes = require('express').Router();

const routerLogin = require('./login');
const routerLists = require('./lists');

routes.use('/login', routerLogin);
routes.use('/lists', routerLists);

module.exports = routes;