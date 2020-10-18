const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.findAll(req.params.boardId);
  res.status(200).send(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const task = await tasksService.findOne(
    req.params.boardId,
    req.params.taskId
  );
  if (task) {
    res.status(200).send(task);
  } else {
    res.sendStatus(404);
  }
});

router.route('/').post(async (req, res) => {
  const task = new Task({ ...req.body, boardId: req.params.boardId });
  await tasksService.createOne(task);
  res.status(200).send(task);
});

router.route('/:taskId').put(async (req, res) => {
  const task = {
    ...req.body,
    id: req.params.taskId,
    boardId: req.params.boardId,
  };
  const isUpdated = await tasksService.updateOne(task);
  if (isUpdated) {
    res.status(200).send(task);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:taskId').delete(async (req, res) => {
  const task = await tasksService.removeOne(
    req.params.boardId,
    req.params.taskId
  );
  if (task) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
