export const typeDef = `
    extend type Query {
        login(user: UserInput): JSON

        getNonFollowers(userId: String): JSON

        getFollows(type: String, userSession: String, after: String): JSON

        unfollow(userSession: String, ids: [Float]): JSON
    }
`;
