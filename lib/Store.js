var pub   = require('./proto/pub');
var force = require('./proto/force');
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

  this.pub   = pub;
  this.force = force;
  this.sub   = sub;
  this.unSub = unSub;
  this.urn   = unSub;
  this.get   = get;
  this.set   = set;
  this.def   = def;
}

module.exports = Store;
