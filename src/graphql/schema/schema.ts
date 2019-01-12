import { makeExecutableSchema } from 'apollo-server';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import { typeDef as User } from '../types/user.schema';
import { typeDef as Instagram } from '../types/instagram.schema';
import { resolveFunctions as instagramResolvers } from '../resolvers/instagram.resolver';

const typeDefs = `
    scalar JSON

    type MutationResult {
        success: Boolean!
        errorMessage: String
        data: JSON
    }

    type Query {
        _blank: String
    }

    type Mutation {
        _blank: String
    }

    type Subscription {
        _blank: String
    }
`;

const resolvers = {};

let rootTypeDefs = mergeTypes([ typeDefs, User, Instagram]);
let rootResolvers = mergeResolvers([resolvers, instagramResolvers ]);

const schema = makeExecutableSchema({
    typeDefs: rootTypeDefs,
    resolvers: rootResolvers
})

export default schema;