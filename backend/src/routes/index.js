const routes = require('express').Router();

const routerLogin = require('./login');
const routerLists = require('./lists');
const routerTask = require('./tasks');

routes.use('/login', routerLogin);
routes.use('/lists', routerLists);
routes.use('/tasks', routerTask);

module.exports = routes;