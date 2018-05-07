'use strict';

const {
  conversationService
} = require('./../../services');

module.exports = async (req, res, next) => {
    const conversationId = req.params.id;
  const conversation = await conversationService.getById(conversationId);
  console.log('conversation', conversation)
  res.send(conversation);
};
