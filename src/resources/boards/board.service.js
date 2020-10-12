const boardsRepo = require('./board.memory.repository');

const findAll = () => boardsRepo.findAll();
const findOne = id => boardsRepo.findOne(id);
const createOne = board => boardsRepo.createOne(board);
const updateOne = board => boardsRepo.updateOne(board);
const removeOne = id => boardsRepo.removeOne(id);

module.exports = { findAll, findOne, createOne, updateOne, removeOne };
