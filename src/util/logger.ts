import winston, { format } from 'winston';
import LogLevels from '../enums/log_levels';
import NodeEnv from '../enums/node_env';

const options: winston.LoggerOptions = {
    transports: [
        new winston.transports.Console({
            level: process.env.NODE_ENV === NodeEnv.PROD 
            ? LogLevels.ERROR : LogLevels.DEBUG,
        }),
        new winston.transports.Console({
            format: format.combine(
                format.timestamp(),
            )
        }),
        new winston.transports.File({
            filename: `logs.log`,
        }),
    ],
};

const logger = winston.createLogger(options);

if (process.env.NODE_ENV !== NodeEnv.PROD) {
    console.log(`Logging level: ${LogLevels.DEBUG}`);
}

export default logger;