'use strict';

const {
  conversationService
} = require('./../../services');

module.exports = async (req, res, next) => {
    const cid = req.params.id;
    const msg = req.params.msg;
    const conversation = await conversationService.addConversationMessage(cid,msg);
    console.log('conversation', conversation)
    res.send(conversation);
};
