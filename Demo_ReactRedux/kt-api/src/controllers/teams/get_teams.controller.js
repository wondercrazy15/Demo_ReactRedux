'use strict';

const errors = require('restify-errors');

const {
  teamService
} = require('./../../services');

module.exports = async (req, res, next) => {
    try {
    const teamId = req.params.teamId;
    const userId = 1;
    const teams = await teamService.getAllTeamsForUser(userId);
    res.send(teams);
  } catch(err) {
    return next(new errors.InternalServerError(err));
  }
}
