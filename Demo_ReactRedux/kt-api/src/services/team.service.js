'use strict';

const {
  each,
  sample,
  sampleSize,
  random,
  times } = require('lodash');
const faker = require('faker');
const asyncCtrl = require('async');
const {
  announcementMethod,
  conversationMethod,
  messageMethod,
  taskMethod,
  teamMethod,
  userMethod
} = require('./../methods');

module.exports = {
  getAllTeamsForUser: async (userId) => {
    return await teamMethod.getAll(userId);
  },
  getTeamSummaryForUser: async (teamId, userId) => {
    return await conversationMethod.get();

    // each(users, function(user, idx) {
    //   if(user.is_me) return;
    //   const randomQuantity = Math.floor(Math.random() * (9 - 1 + 1)) + 19;
    //   const randomparticipantsQuantity = Math.floor(Math.random() * 2) + 1;
    //   const participants = [user, me];
    //   const detailMessages = [];
    //
    //   for (let ic = 0; ic < randomQuantity; ic++) {
    //     const random = sample(participants);
    //
    //     detailMessages.push({
    //       id: faker.random.uuid(),
    //       sender: random,
    //       created_at: faker.date.past(),
    //       message: faker.lorem.words()
    //     });
    //   }
    //
    //   messages.push({
    //     id: 'message:' + idx,
    //     type: 'message',
    //     participants: [user],
    //     messages: detailMessages
    //   });
    // });
    //
    // for (let i = 0; i < quantity; i++) {
    //   const messages = [];
    //   const randomQuantity = Math.floor(Math.random() * 15) + 30;
    //
    //   const randomparticipantsQuantity = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    //   const participants = sampleSize(users, randomparticipantsQuantity);
    //
    //   for (let ic = 0; ic < randomQuantity; ic++) {
    //     const random = sample(participants);
    //
    //     messages.push({
    //       id: faker.random.uuid(),
    //       sender: random,
    //       created_at: faker.date.past(),
    //       message: faker.lorem.words()
    //     });
    //   }
    // }
    //
    // const announcementCount = random(1, 3);
    // const announcements = [];
    // times(announcementCount, function(idx) {
    //   const randomparticipantsQuantity = random(1, 10);
    //   const participants = sampleSize(users, randomparticipantsQuantity);
    //
    //   const messages = [];
    //   const randomQuantity = random(1, 4);
    //   for (let ic = 0; ic < randomQuantity; ic++) {
    //     const random = sample(participants);
    //     messages.push({
    //       id: faker.random.uuid(),
    //       sender: random,
    //       created_at: faker.date.past(),
    //       message: faker.lorem.words()
    //     });
    //   }
    //
    //   announcements.push({
    //     id: faker.random.uuid(),
    //     type: 'announcement',
    //     name: faker.commerce.productName(),
    //     properties: {
    //       is_read: false
    //     },
    //     participants,
    //     messages
    //   })
    // });
    return {
        
        messages, tasks, announcements, conversations, teams, personal
    };
  }
};
