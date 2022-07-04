const listService = require('../services/lists');

class ListsController {
  create = async (req, res, next) => {
    try {
      const { listName, userId } = req.body;
      const newList = await listService.createList({ listName, userId});

      return res.status(201).json(newList);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await listService.deleteList(id);

      return res.status(200).json(deleted);
    } catch (err) {
      next(err);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { listName, userId } = req.body;
      const updated = await listService.updateList({ id, listName, userId});

      return res.status(200).json(updated);
    } catch (err) {
      next(err);
    }
  }

  get = async (req, res, next) => {
    try {
      const { userId } = req.body;
      const allLists = await listService.getLists(userId);

      return res.status(200).json(allLists);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ListsController();