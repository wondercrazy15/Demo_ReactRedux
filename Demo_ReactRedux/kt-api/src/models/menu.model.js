
const {
  each,
  get,
  isNil
} = require('lodash');

module.exports = function Menu(options) {
  if(!this instanceof Menu) {
    return new Menu(options);
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
  this.notification_count = get(options, 'notificationCount', 0)
}

function throwErrorWithAttr(attr) {
  throw new Error('`' + attr + '` must be defined in Menu model');
}
