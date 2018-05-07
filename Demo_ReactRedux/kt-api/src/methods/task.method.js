'use strict';

const faker = require('faker');
const {
  find,
  map,
  pick,
  random,
  times
} = require('lodash');
const {
  Menu
} = require('./../models');

const tasks = times(3, (idx) => {
  const task = new Menu({
    id: faker.random.number(),
    type: 'task',
    name: faker.name.title(),
    notificationCount: random(0, 5)
  });
  task.participants = [];
  return task;
});

module.exports = {
  getAll: () => {
    const headers = map(tasks, (task) => {
      return pick(task, ['id', 'type', 'name', 'notification_count']);
    });
    return Promise.resolve(headers);
  },
  get: (condition) => {
    const task = find(tasks, condition);
    return Promise.resolve(task);
  }
};
