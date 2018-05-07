'use strict';

const faker = require('faker');
const {
  random,
  times
} = require('lodash');
const {
  Menu
} = require('./../models');

const announcements = times(3, (idx) => {
  return new Menu({
    id: faker.random.number(),
    type: 'announcement',
    name: faker.name.title(),
    notificationCount: random(0, 5)
  });
});

module.exports = {
  getAll: (teamId) => {
    return Promise.resolve(announcements);
  },
  get: (userId) => {
    return Promise.resolve(announcements);
  }
};
