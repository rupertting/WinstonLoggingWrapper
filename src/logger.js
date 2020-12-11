'use strict';

const moduleLogger = require('./');

//Initialize the wrapper with log level set at debug - default is info
var applicationId = "123-aaa-uash-$";
var instanceId = "88-77-99-aa-33";

var environmentType = "DEV";
var hostIp = "89089-kaskdas-opoo";

var correlationId = "h5846654jsdjf"
var logger = moduleLogger.init('debug', applicationId, instanceId, environmentType, hostIp, correlationId);

logger.info("star schema");
//Output
// {
//   message: 'star schema',
//   level: 'info',
//   timestamp: '2020-12-06T14:47:26.273Z'
// }

logger.error("oppsie");
//Output
// {
//   message: 'oppsie',
//   level: 'error',
//   timestamp: '2020-12-06T14:47:26.284Z'
// }
//error log file at \errorLogs\application-2020-12-06-14.log

logger.info("metadata", { apiKey: '1232' });
//Output
// {
//   apiKey: '[REDACTED]',
//   level: 'info',
//   message: 'metadata',
//   timestamp: '2020-12-06T14:47:26.286Z'
// }

var obj = {
  username: 'watson',
  password: 'hhGu38gf',
  extra: {
    id: 1,
    token: 'some-secret-stuff',
    card: '1234 1234 1234 1234'
  }
}
logger.error("Sensitive information", { sensitiveInfo: obj });
//Output
// {
//   sensitiveInfo: {
//     username: 'watson',
//     password: '[REDACTED]',
//     extra: { id: 1, token: '[REDACTED]', card: '[REDACTED]' }
//   },
//   level: 'error',
//   message: 'Sensitive information',
//   timestamp: '2020-12-06T14:47:26.288Z'
// }
//error log file at \errorLogs\application-2020-12-06-14.log

logger.info("password is 12345");
// {
//   message: 'password[REDACTED]',
//   level: 'info',
//   timestamp: '2020-12-06T14:47:26.291Z'
// }
