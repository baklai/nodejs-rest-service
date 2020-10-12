const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const DB = {
  USERS: [],
  BOARDS: [],
  TASKS: [],
  init: () => {
    DB.USERS.push(new User(), new User(), new User());
    DB.BOARDS.push(new Board(), new Board());
    DB.TASKS = [];
  }
};

/* INIT DB DEFAULT */
DB.init();

/* USERS METHODS */
const findAllUsers = () => {
  return DB.USERS;
};
const findOneUser = id => {
  return DB.USERS.find(item => item.id === id);
};
const createOneUser = user => DB.USERS.push(user);
const updateOneUser = user => {
  const { id } = user;
  const index = DB.USERS.findIndex(item => item.id === id);
  if (index > -1) {
    DB.USERS = [
      ...DB.USERS.slice(0, index),
      user,
      ...DB.USERS.slice(index + 1)
    ];
    return true;
  }
  return false;
};
const removeOneUser = id => {
  const index = DB.USERS.findIndex(item => item.id === id);
  if (index > -1) {
    DB.USERS = DB.USERS.filter(user => user.id !== id);
    DB.TASKS = DB.TASKS.map(task =>
      task.userId === id ? { ...task, userId: null } : task
    );
    return true;
  }
  return false;
};

/* BOARDS METHODS */
const findAllBoards = () => {
  return DB.BOARDS;
};
const findOneBoard = id => {
  return DB.BOARDS.find(item => item.id === id);
};
const createOneBoard = board => {
  DB.BOARDS.push(board);
};
const updateOneBoard = board => {
  const { id } = board;
  const index = DB.BOARDS.findIndex(item => item.id === id);
  if (index > -1) {
    DB.BOARDS = [
      ...DB.BOARDS.slice(0, index),
      board,
      ...DB.BOARDS.slice(index + 1)
    ];
    return true;
  }
  return false;
};
const removeOneBoard = id => {
  const index = DB.BOARDS.findIndex(item => item.id === id);
  if (index > -1) {
    DB.BOARDS = DB.BOARDS.filter(board => board.id !== id);
    return true;
  }
  return false;
};

/* TASKS METHODS */
const findAllTasks = boardId => {
  return DB.TASKS.filter(task => task.boardId === boardId);
};
const findOneTask = (boardId, taskId) => {
  return DB.TASKS.find(item => item.boardId === boardId && item.id === taskId);
};
const createOneTask = task => {
  DB.TASKS.push(task);
};
const updateOneTask = task => {
  const { id, boardId } = task;
  const index = DB.TASKS.findIndex(
    item => item.id === id && item.boardId === boardId
  );
  if (index > -1) {
    DB.TASKS = [
      ...DB.TASKS.slice(0, index),
      task,
      ...DB.TASKS.slice(index + 1)
    ];
    return true;
  }
  return false;
};
const removeOneTask = (boardId, id) => {
  const index = DB.TASKS.findIndex(
    item => item.id === id && item.boardId === boardId
  );
  if (index > -1) {
    DB.TASKS = DB.TASKS.filter(task => task.id !== id);
    return true;
  }
  return false;
};
const removeByBoardId = id => {
  DB.TASKS = DB.TASKS.filter(task => task.boardId !== id);
};

module.exports = {
  findAllUsers,
  findOneUser,
  createOneUser,
  updateOneUser,
  removeOneUser,
  findAllBoards,
  findOneBoard,
  createOneBoard,
  updateOneBoard,
  removeOneBoard,
  removeByBoardId,
  findAllTasks,
  findOneTask,
  createOneTask,
  updateOneTask,
  removeOneTask
};
