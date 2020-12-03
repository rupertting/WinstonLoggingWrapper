'use strict';

const moduleLogger = require('./');
var logger = moduleLogger.init('debug');

// logger.info("star schema");
// logger.error("oppsie");
// logger.info("metadata", { apiKey: '1232' });
logger.info("Logging in with password", { password: 'qwerty'})
 
