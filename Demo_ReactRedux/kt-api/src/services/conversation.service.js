'use strict';

const {
  conversationMethod
} = require('./../methods');

module.exports = {
  // 1. Get team ID from userId
  // 2. Get conversations from my preference
  // 3. Get conversations from team that is required
  //   - task that user is involved
  //   - message that user is involved
  //   - announcement that user is involved
  // 4. sort by alphabetical order
  compileByUserId: (userId) => {
    // announcement, task, message conversations

    conversationMethod.get({
      where: {

      }
    })
  },

  getById: async (cvsnId) => {
    return await conversationMethod.getById(cvsnId);
  },
  addConversationMessage: async (cvsnId,msg) => {
      return await conversationMethod.addMessage(cvsnId,msg);
  }
};
