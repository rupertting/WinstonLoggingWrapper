'use strict'
//Modified from https://github.com/watson/redact-secrets
//Includes message level redaction in addition to objects
//Includes fixed for Symbols which are not included in the traverse mapping

var traverse = require('traverse')
var isSecret = require('./secrets')

module.exports = function (redacted) {
  return {
    map: map,
    forEach: forEach
  }

  function map (obj) {
    const result = traverse(obj).map(function (val) {
      if (isSecret.key(this.key) || isSecret.value(val)) this.update(redacted)
    });

    const levelSym = Symbol.for('level');
    const splatSym = Symbol.for('splat');

    result[levelSym] = obj[(levelSym)];
    result[splatSym] = obj[(splatSym)];

    result.message = isSecret.message(result.message, redacted);
    //console.log("redactedMessage: " + redactedMessage)
    return result;  
  }

  function forEach (obj) {
    traverse(obj).forEach(function (val) {
      if (isSecret.key(this.key) || isSecret.value(val)) this.update(redacted)
    })
  }
}
