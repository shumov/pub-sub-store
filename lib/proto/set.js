var slice = Array.prototype.slice;

module.exports = function set(id) {
  this.argumentsById[id] = slice.call(arguments, 1);
};