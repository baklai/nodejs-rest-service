const tasksRepo = require('./task.memory.repository');

const findAll = boardId => tasksRepo.findAll(boardId);
const findOne = (boardId, id) => tasksRepo.findOne(boardId, id);
const createOne = task => tasksRepo.createOne(task);
const updateOne = task => tasksRepo.updateOne(task);
const removeOne = (boardId, id) => tasksRepo.removeOne(boardId, id);

module.exports = {
  findAll,
  findOne,
  createOne,
  updateOne,
  removeOne
};
