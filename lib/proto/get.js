module.exports = function get(id) {
  var args = this.argumentsById[id] || [];
  if (args.length) {
    return args[0];
  } else {
    return null;
  }
};