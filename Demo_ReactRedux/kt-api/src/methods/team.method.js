'use strict';

const faker = require('faker');
const {
  random,
  times
} = require('lodash');
const {
  Menu
} = require('./../models');

const teamNames = [
  'Kaitaku Dev',
  'Kaitaku Marketing',
  'tsuz/node-foo-bar'
];
const teams = times(3, (idx) => {
  return new Menu({
    id: faker.random.number(),
    type: 'team',
    name: teamNames[idx],
    notificationCount: random(0, 5)
  });
});

module.exports = {
  get: (userId) => {
    return Promise.resolve(teams);
  },
  getAll: (userId) => {
    return Promise.resolve(teams);
  }
};
