'use strict';

const users = [];
const faker = require('faker');
const {
  sampleSize,
  times
} = require('lodash');
times(20, function(idx) {
  users.push({
    id: idx,
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    image_url: faker.random.image(),
    is_me: false
  })
})

const me = {
  id: users.length,
  name: 'Takuto Suzuki',
  image_url: faker.random.image(),
  is_me: true
};
users.push(me);

module.exports = {
  get: () => {
    return Promise.resolve(users);
  },
  getByCount: (count = 5) => sampleSize(users, count)
};
