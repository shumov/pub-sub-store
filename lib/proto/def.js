var slice = Array.prototype.slice;

module.exports = function def(id) {
  if (null === this.get(id)) {
    this.argumentsById[id] = slice.call(arguments, 1);
  }
};