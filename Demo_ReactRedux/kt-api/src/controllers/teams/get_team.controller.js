'use strict';

const errors = require('restify-errors');

const {
  teamService
} = require('./../../services');

module.exports = async (req, res, next) => {
    try {
        
    const teamId = req.params.teamId;
    const userId = 1;
    const team = await teamService.getTeamSummaryForUser(teamId, userId);

    res.send(team);
  } catch(err) {
    return next(new errors.InternalServerError(err));
  }
}
