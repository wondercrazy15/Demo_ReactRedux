'use strict';

const faker = require('faker');
const {
  random,
  times
} = require('lodash');
const {
  Menu
} = require('./../models');

const messages = times(3, (idx) => {
  return new Menu({
    id: faker.random.number(),
    type: 'message',
    name: faker.name.title(),
    notificationCount: random(0, 5)
  });
});

module.exports = {
  get: (userId) => {
    return Promise.resolve(messages);
  },
  getAll: (userId, teamId) => {
    return Promise.resolve(messages);
  }
};
