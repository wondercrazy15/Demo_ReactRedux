'use strict';

const {
  find,
  parseInt
} = require('lodash');

const {
  taskMethod
} = require('./../methods');

const {
  logger
} = require('./../utils');

module.exports = {
  getAll: async () => {
    return await taskmethod.getAll();
  },
  get: async (id) => {
    id = parseInt(id);
     return await taskMethod.getTask({id});
  }
};
