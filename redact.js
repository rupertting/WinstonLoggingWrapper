var redact = require('redact-secrets')('[REDACTED]')

var obj = {
  username: 'watson',
  password: 'hhGu38gf',
  extra: {
    id: 1,
    token: 'some-secret-stuff',
    card: '1234 1234 1234 1234'
  }
}
 
console.log(redact.map(obj))