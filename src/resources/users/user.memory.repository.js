const DB = require('../../common/database');

const findAll = async () => {
  return DB.findAllUsers();
};
const findOne = async id => {
  return DB.findOneUser(id);
};
const createOne = async user => DB.createOneUser(user);
const updateOne = async user => {
  return DB.updateOneUser(user);
};
const removeOne = async id => {
  return DB.removeOneUser(id);
};

module.exports = { findAll, findOne, createOne, updateOne, removeOne };
