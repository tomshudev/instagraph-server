import { InstaService } from "../../services/server";
import { User } from "../../models/user.model";

enum FollowType {
    FOLLOWER = "followers",
    FOLLOWING = "followings"
}

export const resolveFunctions = {
    Query: {
        login: async (_, { user: { username, password } }) => {
            return await InstaService.login({ username, password });
        },

        getFollows: async (_, { type, userSession, after }) => {
            if (type === FollowType.FOLLOWER) {
                return await InstaService.getFollowers(userSession, after? after : 'empty');
            } else if (type === FollowType.FOLLOWING) {
                return await InstaService.getFollowings(userSession, after? after : 'empty');
            }
        },

        unfollow: async (_, { userSession, ids }) => {
            return await InstaService.unfollow(userSession, ids);
        }
    }
};
