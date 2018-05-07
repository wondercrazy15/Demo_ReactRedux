'use strict';

try {
  require('dotenv');
} catch(err) {
  console.info('.env file not found. Relying on starting this app with env var arguments');
}
const bluebird = require('bluebird');
const asyncCtrl = require('async');
bluebird.promisifyAll(asyncCtrl);

const Logger = require('bunyan');
const log = new Logger.createLogger({
    name: 'app-name',
    serializers: {
        req: Logger.stdSerializers.req
    }
});

const restify = require('restify');
const {
  announcements,
  conversations,
  menu,
  messages,
  tasks,
  teams
} = require('./src/controllers');

const server = restify.createServer({
  version: '1.1.1',
  acceptable: 'application/json'
});
const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['*']
});

server.pre(function (request, response, next) {
  console.log('asdf');
    log.info({ req: request }, 'REQUEST');
    next();
});
server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser());

server.on('NotFound', function (req, res, err, cb) {
  // do not call res.send! you are now in an error context and are outside
  // of the normal next chain. you can log or do metrics here, and invoke
  // the callback when you're done. restify will automtically render the
  // NotFoundError as a JSON response.
  return cb();
});

server.on('InternalServer', function (req, res, err, cb) {
  // if you don't want restify to automatically render the Error object
  // as a JSON response, you can customize the response by setting the
  // `body` property of the error
  err.body = '<html><body>some custom error content!</body></html>';
  return cb();
});

const prefix = '/v1';

// get current menu items
server.get(prefix + '/teams', teams.getAll);
server.get(prefix + '/teams/:id', teams.get);
server.get(prefix + '/conversations/:id', conversations.get);
server.get(prefix + '/menu', menu.get);
server.get(prefix + '/message/:id', messages.get);
server.get(prefix + '/announcement/:id', announcements.get);
server.get(prefix + '/task/:id', tasks.get);
server.get(prefix + '/conversation/:id', conversations.get);
server.get(prefix + '/conversation/:id/:msg', conversations.add);

server.listen(process.env.BIND_PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

process.on('unhandledRejection',(err) => {
  throw err;
});
