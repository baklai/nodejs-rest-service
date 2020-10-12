const usersRepo = require('./user.memory.repository');

const findAll = () => usersRepo.findAll();
const findOne = id => usersRepo.findOne(id);
const createOne = user => usersRepo.createOne(user);
const updateOne = user => usersRepo.updateOne(user);
const removeOne = id => usersRepo.removeOne(id);

module.exports = { findAll, findOne, createOne, updateOne, removeOne };
