const { List } = require('../database/models');

class ListsService {
  createList = async ({ listName, userId }) => {
    console.log(listName)
    const newList = await List.create({
      listName,
      userId})
    
    return newList.dataValues;
  };

  deleteList = async (id) => {
    const count = await List.destroy({ where: { id } });

    return count;
  };

  updateList = async ({ id, listName, userId }) => {

    await List.update({ listName }, {
      where: { id } });
    
    const updatedList = await List.findByPk(id);

    return updatedList;
  };

  getLists = async (userId) => {
    const allLists = await List.findAll({ where: { userId } });

    return allLists;
  }
}

module.exports = new ListsService();