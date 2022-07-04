const { Task } = require('../database/models');

class TasksService {
  createTask = async ({ describe, listId }) => {
    const newTask = await Task.create({
      describe,
      listId });
    
    return newTask.dataValues;
  };

  deleteTask = async (id) => {
    const count = await Task.destroy({ where: { id } });

    return count;
  };

  updateTask = async ({ id, describe, listId }) => {
    
    await Task.update({ describe }, {
      where: { id } });
    
    const updatedTask = await Task.findByPk(id);

    return updatedTask;
  };

  getTasks = async (listId) => {
    const allTasks = await Task.findAll({ where: { listId } });

    return allTasks;
  };
}

module.exports = new TasksService();