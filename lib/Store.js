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

Store.prototype.pub   = pub;
Store.prototype.sub   = sub;
Store.prototype.unSub = unSub;
Store.prototype.get   = get;
Store.prototype.set   = set;
Store.prototype.def   = def;

module.exports = Store;
