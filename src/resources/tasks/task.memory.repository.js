const DB = require('../../common/database');

const findAll = async boardId => DB.findAllTasks(boardId);
const findOne = async (boardId, id) => DB.findOneTask(boardId, id);
const createOne = async task => DB.createOneTask(task);
const updateOne = async task => DB.updateOneTask(task);
const removeOne = async (boardId, id) => DB.removeOneTask(boardId, id);

module.exports = {
  findAll,
  findOne,
  createOne,
  updateOne,
  removeOne
};
