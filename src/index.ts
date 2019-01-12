import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema/schema";
import { PythonShell } from "python-shell";
import * as path from "path";
const logger = require("./logger/app-logger").logger;

PythonShell.defaultOptions = {
    cwd: path.join(__dirname, "/scripts")
};

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
    logger.info("Server works " + url);
});
