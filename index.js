'use strict';
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, prettyPrint } = format;
const redact = require('redact-secrets')('[REDACTED]');
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

function initialize(logLevel = 'info') {
    logger = createLogger({
        level: logLevel,
        format: combine(
            timestamp(),
            format(info => redact.map(info))(),
            format.json(),
            prettyPrint()
        ),
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