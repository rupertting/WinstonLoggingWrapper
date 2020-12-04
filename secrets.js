'use strict'

var KEYS = [
  // generic
  /passw(or)?d/i,
  /^pw$/,
  /^pass$/i,
  /secret/i,
  /token/i,
  /api[-._]?key/i,
  /session[-._]?id/i,

  // specific
  /^connect\.sid$/ // https://github.com/expressjs/session
]

var VALUES = [
  /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/ // credit card number
]

var MESSAGES = [
  /(?<=password)(.+)/i,
  /(?<=secret)(.+)/i,
  /(?<=token)(.+)/i,
  /(?<=api[-._]?key)(.+)/i,
  /(?<=session[-._]?id)(.+)/i
]

exports.key = key
exports.value = value
exports.message = message

function key (str) {
  return KEYS.some(function (regex) {
    return regex.test(str)
  })
}

function value (str) {
  return VALUES.some(function (regex) {
    return regex.test(str)
  })
}

function message(str, redacted) {
  var redactRegex = MESSAGES.find(function (regex) {
    return regex.test(str);
  })

  return str.replace(redactRegex, redacted);
}
