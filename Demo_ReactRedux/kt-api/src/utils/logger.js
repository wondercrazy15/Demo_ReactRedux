'use strict';

const bunyan = require('bunyan');
module.exports = bunyan.createLogger({
    name: 'myapp',
    stream: process.stdout,
    level: 'info'
});
