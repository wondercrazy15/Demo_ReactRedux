'use strict';

const {
  menuService
} = require('./../../services');

module.exports = async (req, res, next) => {
  const results = await menuService.get();
  res.send(results);
};
