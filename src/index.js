'use strict';
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;
const redact = require('./redact')('[REDACTED]');
require('winston-daily-rotate-file');

let logger;
const errorDir = './errorLogs';

const errorTransport = new transports.DailyRotateFile({
    dirname: errorDir,
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'error'
});
  
function initialize(logLevel = 'info', applicationId, instanceId, environmentType, hostIp, correlationId) {

      let meta = {
        'application-id': applicationId,
        'instance-id': instanceId,
        'environment-type': environmentType,
        'host-ip': hostIp,
    }
    let scope = {
        'correlation-id': correlationId
    }
    
    logger = createLogger({
        level: logLevel, 
        format: combine(
            timestamp(),
            format(info => redact.map(info))(),
            format.json(),
            prettyPrint(),
            format.colorize({all: true})
        ),
        
        defaultMeta: {'meta': meta, 'scope': scope},
        transports: [
            new transports.Console(),
            errorTransport
        ]
    });

    return logger;
}

module.exports = {
    init: initialize
};