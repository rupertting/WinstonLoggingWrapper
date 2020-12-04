'use strict';

const moduleLogger = require('./');
var logger = moduleLogger.init('debug');

// logger.info("star schema");
// logger.error("oppsie");
// logger.info("metadata", { apiKey: '1232' });
//logger.info("Logging in with password", { password: 'qwerty'})
var obj = {
  username: 'watson',
  password: 'hhGu38gf',
  extra: {
    id: 1,
    token: 'some-secret-stuff',
    card: '1234 1234 1234 1234'
  }
}

//logger.error("Password", {sensitiveInfo: obj});
logger.info("secret is 12345");
logger.info("password is 12345");