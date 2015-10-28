module.exports = function pub(id) {
  var oldArgs = this.argumentsById[id];
  var args = this.argumentsById[id] = Array.prototype.slice.call(arguments, 1);
  var propGroups = this.propGroupsById[id];

  if (propGroups && args && args.length) {
    // есть подписки на проперти
    var oldArg = (oldArgs && oldArgs[0]) || {};
    var arg = args[0];
    var propGroup;
    var i = 0;
    var il = propGroups.length;
    var prop;
    var p, pl;
    var propActions = this.propActionsById[id];
    while (i !== il) {
      propGroup = propGroups[i];
      if (!propGroup) {
        i++;
        continue;
      }
      p = 0;
      pl = propGroup.length;
      while (p !== pl) {
        prop = propGroup[p];
        if (typeof arg[prop] !== 'undefined' && oldArg[prop] !== arg[prop]) {
          // тогда выполняем
          propActions[i].apply(null, args);
          break;
        }
        p++;
      }
      i++;
    }
  }

  // ищем простые подписки
  var actions = this.actionsById[id] || [];
  if (actions.length) {
    var a = 0;
    var al = actions.length;
    var action;
    while (a !== al) {
      action = actions[a];
      if (typeof action === 'function') {
        action.apply(null, args);
      }
      a++;
    }
  }
};