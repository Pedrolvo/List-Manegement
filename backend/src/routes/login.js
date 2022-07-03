const express = require('express');

const loginController = require('../controllers/login');

const routerLogin = express.Router();

routerLogin.post('/', loginController.login);
routerLogin.post('/new', loginController.createUser);

module.exports = routerLogin;