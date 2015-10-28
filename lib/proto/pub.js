var slice = Array.prototype.slice;

module.exports = function pub(id) {
  var oldArgs = this.argumentsById[id] || [];
  var newArgs = slice.call(arguments, 1);

  if (oldArgs.length && (oldArgs.length === newArgs.length)) {
    var index = oldArgs.length;
    while (index--) {
      if (oldArgs[index] !== newArgs[index]) break;
    }

    if (index === -1) {
      // args equal -> do nothing
      return;
    }
  }

  this.force.apply(this, arguments);
};