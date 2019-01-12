"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var merge_graphql_schemas_1 = require("merge-graphql-schemas");
var user_schema_1 = require("../types/user.schema");
var instagram_schema_1 = require("../types/instagram.schema");
var instagram_resolver_1 = require("../resolvers/instagram.resolver");
var typeDefs = "\n    scalar JSON\n\n    type MutationResult {\n        success: Boolean!\n        errorMessage: String\n        data: JSON\n    }\n\n    type Query {\n        _blank: String\n    }\n\n    type Mutation {\n        _blank: String\n    }\n\n    type Subscription {\n        _blank: String\n    }\n";
var resolvers = {};
var rootTypeDefs = merge_graphql_schemas_1.mergeTypes([typeDefs, user_schema_1.typeDef, instagram_schema_1.typeDef]);
var rootResolvers = merge_graphql_schemas_1.mergeResolvers([resolvers, instagram_resolver_1.resolveFunctions]);
var schema = apollo_server_1.makeExecutableSchema({
    typeDefs: rootTypeDefs,
    resolvers: rootResolvers
});
exports.default = schema;
//# sourceMappingURL=../../../src/dist/graphql/schema/schema.js.map