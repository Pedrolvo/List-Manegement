const tasksService = require('../services/tasks');

class TasksController {
  create = async (req, res, next) => {
    try {
      const { describe, listId } = req.body;
      const newTask = await tasksService.createTask({ describe, listId });

      return res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await tasksService.deleteTask(id);

      return res.status(200).json(deleted);
    } catch (err) {
      next(err);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { describe, listId } = req.body;
      const updated = await tasksService.updateTask({ id, describe, listId });
      console.log('parammm ==>', id, describe)

      return res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  };

  get = async (req, res, next) => {
    try {
      const { id } = req.params;
      const allTasks = await tasksService.getTasks(id);

      return res.status(200).json(allTasks);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = new TasksController();