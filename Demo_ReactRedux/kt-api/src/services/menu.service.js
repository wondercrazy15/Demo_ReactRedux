'use strict';

const asyncCtrl = require('async');
const {
  assign,
  each,
  map,
  sample,
  sampleSize,
  random,
  times } = require('lodash');
const faker = require('faker');
const {
  announcementMethod,
  messageMethod,
  taskMethod,
  teamMethod,
  userMethod
} = require('./../methods');

module.exports = {

  // compile teams, announcements, messages, tasks data
  get: async () => {
    return await asyncCtrl.parallelAsync({
      teams: async function getTeams() {
        return await teamMethod.get();
      },
      announcements: async function getAnnouncements() {
        return await announcementMethod.get();
      },
      messages: async function getMessages() {
        return await messageMethod.get();
      },
      tasks: async function getTasks(cb) {
        return await taskmethod.getAll();
      }
    });
  }
};

// return await asyncCtrl.parallelAsync({
//   teams: async function getTeams() {
//     const teams = await teamMethod.get();
//     return await asyncCtrl.mapAsync(teams, async (team) => {
//       const results = await asyncCtrl.parallelAsync({
//         announcements: async function getAnnouncements() {
//           return await announcementMethod.get();
//         },
//         messages: async function getMessages() {
//           return await messageMethod.get();
//         },
//         tasks: async function getTasks(cb) {
//           return await taskMethod.get();
//         }
//       });
//       return assign(team, results);
//     });
//   }
// });
