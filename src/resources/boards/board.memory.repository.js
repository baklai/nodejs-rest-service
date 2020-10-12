const DB = require('../../common/database');

const findAll = async () => {
  return DB.findAllBoards();
};
const findOne = async id => {
  return DB.findOneBoard(id);
};
const createOne = async board => DB.createOneBoard(board);
const updateOne = async board => {
  return DB.updateOneBoard(board);
};
const removeOne = async id => {
  const isRemoved = DB.removeOneBoard(id);
  if (isRemoved) {
    DB.removeByBoardId(id);
  }
  return isRemoved;
};

module.exports = { findAll, findOne, createOne, updateOne, removeOne };
