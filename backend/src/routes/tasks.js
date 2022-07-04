const express = require('express');

const taskController = require('../controllers/tasks');

const routerTask = express.Router();

routerTask.post('/', taskController.create);
routerTask.delete('/:id', taskController.delete);
routerTask.put('/:id', taskController.update);
routerTask.get('/', taskController.get);

module.exports = routerTask;