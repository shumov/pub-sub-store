module.exports = function sub(id, action, newOnly) {
  var args;
  var propStringIndex = id.indexOf(':');

  if (propStringIndex === -1) {
    // простая подписка
    args = this.argumentsById[id];
    var actions = this.actionsById[id] = this.actionsById[id] || [];
    if (actions.indexOf(action) === -1) {
      actions[actions.length] = action;
    } else {
      console.warn('This action already in subscriptions for "' + id + '"');
    }

    if (!newOnly && typeof args !== 'undefined') {
      action.apply(null, args);
    }

  } else {
    // подписка только на отдельные проперти в первом аргументе

    var idClear = id.substr(0, propStringIndex);
    args = this.argumentsById[idClear];
    var propString = id.substr(propStringIndex + 1);
    var props = propString.split(',');

    var propGroups =  this.propGroupsById[idClear]  || (this.propGroupsById[idClear]  = []);
    var propGroup;

    var propActions = this.propActionsById[idClear] || (this.propActionsById[idClear] = []);
    var propAction;

    var i = 0;
    var il = propGroups.length;

    var alreadyIn = false;

    while (i !== il) {
      propGroup = propGroups[i];
      if (propGroup.join(',') === propString && propActions[i] === action) {
        // уже есть в списке подписанных
        console.warn('This propAction already in subscriptions for "' + id + '"');
        alreadyIn = true;
        break;
      }
      i++;
    }

    if (!alreadyIn) {
      // добавляем внутрь
      propGroups[propGroups.length] = props;
      propActions[propActions.length] = action;
    }

    if (!newOnly && typeof args !== 'undefined' && args.length) {
      var arg = args[0];
      i = 0;
      il = props.length;
      while (i !== il) {
        if (typeof arg[props[i]] !== 'undefined') {
          // если в первом аргументе есть хотя бы один из указанных параметров,
          // то выполняем экшн
          action.apply(null, args);
          break;
        }
        i++;
      }
    }
  }
};