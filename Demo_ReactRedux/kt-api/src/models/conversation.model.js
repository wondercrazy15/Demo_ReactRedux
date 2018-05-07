
const {
  each,
  get,
  isNil
} = require('lodash');

module.exports = function Conversation(options) {
  if(!this instanceof Conversation) {
    return new Conversation(options);
  }

  const required = ['id', 'type', 'name'];
  each(required, (r) => {
    if(isNil(r)) {
      throwErrorWithAttr(r);
    }
  });

  this.id = options.id;
  this.type = options.type;
  this.name = options.name;

  this.icon = options.icon;
  this.color = options.color;

  this.notification_count = get(options, 'notificationCount', 0)
}

function throwErrorWithAttr(attr) {
  throw new Error('`' + attr + '` must be defined in Conversation model');
}
