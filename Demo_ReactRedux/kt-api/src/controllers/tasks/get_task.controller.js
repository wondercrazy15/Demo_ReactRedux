'use strict';

const {
  taskService
} = require('./../../services');

module.exports = async (req, res, next) => {
  const task = await taskService.get(req.params.id);
  res.send(task);
};
