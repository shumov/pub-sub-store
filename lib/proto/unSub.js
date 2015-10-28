module.exports = function unSub(id, action) {
  var propStringIndex = id.indexOf(':');
  if (propStringIndex === -1) {
    // простая отписка
    var actions = this.actionsById[id] || [];
    if (actions.length) {
      var index = actions.indexOf(action);
      if (index === -1) {
        console.warn('This action was not bound for "' + id + '"');
      } else {
        actions.splice(index, 1);
      }
    } else {
      console.warn('No actions subscribed for "' + id + '"');
    }
  } else {
    // отписка от свойств (пропертей) первого аргумента

    var idClear = id.substr(0, propStringIndex);
    var propString = id.substr(propStringIndex + 1);
    var propGroups =  this.propGroupsById[idClear];
    if (propGroups) {
      var propActions = this.propActionsById[idClear] || (this.propActionsById[idClear] = []);

      var i = 0;
      var il = propGroups.length;
      while (i !== il) {
        if (propGroups[i].join(',') === propString && propActions[i] === action) {
          propGroups.splice(i, 1);
          propActions.splice(i, 1);
          il--;
        } else {
          i++;
        }
      }
    } else {
      console.warn('No propActions subscribed for "' + id + '"');
    }
  }
};