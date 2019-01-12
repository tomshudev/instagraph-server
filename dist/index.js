"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = require("./graphql/schema/schema");
var server = new apollo_server_1.ApolloServer({ schema: schema_1.default });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log('Server works ' + url);
});
//# sourceMappingURL=../src/dist/index.js.map