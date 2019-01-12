import { existsSync, mkdirSync } from "fs";
import * as winston from "winston";
import config from "../config/config";

let dir = config.logFileDir;

if (!existsSync(dir)) {
    mkdirSync(dir);
}

exports.logger = winston.createLogger({
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        verbose: 3,
        debug: 4,
        silly: 5
    },
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({
            filename: `${config.logFileDir}/${config.logFileName}`
        }),
        new winston.transports.Console({ format: winston.format.simple() })
    ]
});
