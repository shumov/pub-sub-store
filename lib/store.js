var pub   = require('./proto/pub');
var sub   = require('./proto/sub');
var unSub = require('./proto/unSub');
var get   = require('./proto/get');
var set   = require('./proto/set');
var def   = require('./proto/def');

function Store() {
  this.actionsById = {};
  this.argumentsById = {};
  this.propGroupsById = {};
  this.propActionsById = {};
}

var proto = Store.prototype;

proto.pub   = pub;
proto.sub   = sub;
proto.unSub = unSub;
proto.get   = get;
proto.set   = set;
proto.def   = def;

module.exports = Store;
