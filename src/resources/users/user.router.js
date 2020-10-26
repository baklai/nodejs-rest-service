const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const users = await usersService.findAll();
      res.status(200).send(users.map(User.toResponse));
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await usersService.createOne(req.body);
      res.status(200).send(User.toResponse(user));
    } catch (err) {
      next(err);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const user = await usersService.findOne(req.params.id);
      console.log(User.toResponse(user));
      if (user) {
        res.status(200).send(User.toResponse(user));
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const user = {
        ...req.body,
        id: req.params.id
      };
      const isUpdated = await usersService.updateOne(user);
      if (isUpdated) {
        res.status(200).send(User.toResponse(user));
      } else {
        res.sendStatus(400);
      }
    } catch (err) {
      next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const user = await usersService.removeOne(req.params.id);
      if (user) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
