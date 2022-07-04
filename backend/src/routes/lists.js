const express = require('express');

const listController = require('../controllers/lists');

const routerList = express.Router();

routerList.post('/', listController.create);
routerList.delete('/:id', listController.delete);
routerList.put('/:id', listController.update);
routerList.get('/', listController.get);

module.exports = routerList;