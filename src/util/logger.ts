import winston, {format, transports} from 'winston';
import { LogLevels, NodeEnv } from '../enums';

const logSrc = 'logs/';
const combinedLogFileName = 'combined.log';
const errorLogFileName = 'errors.log';

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === NodeEnv.PROD 
            ? LogLevels.ERROR : LogLevels.DEBUG,
        }),
        new winston.transports.File({
            filename: logSrc + combinedLogFileName,
        }),
        new winston.transports.File({
            filename: logSrc + errorLogFileName,
            level: LogLevels.ERROR,
        })
    ],
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== NodeEnv.PROD) {
    logger.add(
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.prettyPrint(),
            )
        })
    )
}

export default logger;