import { User } from "../models/user.model";
import * as Instagram from "instagram-web-api";
import { PythonShell } from "python-shell";
const logger = require("../logger/app-logger").logger;

type FollowersResult = {
    endCursor: string;
    hasNextPage: boolean;
    data: any[];
};

class InstagramService {
    private instaClient: any;

    constructor() {
        // this.login({ username: "tom7897", password: "8192426Abc" });
    }

    async login(user: User) {
        // this.instaClient = new Instagram(user);

        // let userData = await this.instaClient.login().then(async () => {
        //     return await this.instaClient
        //         .getUserByUsername({ username: user.username })
        //         .then(userData => {
        //             return userData;
        //         });
        // });

        // return { userID: userData.id };

        return this.runScript(
            "login.py",
            [
                // "{\"token\": \"5WK8qz4yKz0PRg8pMaQ4fCrpgTruWd7k\", \"username_id\": 38539022, \"rank_token\": \"38539022_08bb3cfc-6504-4746-a922-3b4c0f4fb338\", \"uuid\": \"08bb3cfc-6504-4746-a922-3b4c0f4fb338\", \"session\": {\"csrftoken\": \"5WK8qz4yKz0PRg8pMaQ4fCrpgTruWd7k\", \"ds_user\": \"tom7897\", \"ds_user_id\": \"38539022\", \"igfl\": \"tom7897\", \"is_starred_enabled\": \"yes\", \"mcd\": \"3\", \"mid\": \"XDhzFgABAAHD_YKKyGoOWfnDTOtq\", \"rur\": \"FTW\", \"sessionid\": \"IGSC4274dd5127313fb883c0cfe018613fc170092ae35ed6d681c205497428e3a1c7%3AuskkA6P1LewPSS8Kesbsfl3hFxzqPcRQ%3A%7B%22_auth_user_id%22%3A38539022%2C%22_auth_user_backend%22%3A%22accounts.backends.CaseInsensitiveModelBackend%22%2C%22_auth_user_hash%22%3A%22%22%2C%22_platform%22%3A1%2C%22_token_ver%22%3A2%2C%22_token%22%3A%2238539022%3AuvlTVe2q0PCsZla4SYOEaPzFbebChYxh%3A5fdcd4f5d46c9749712536b5e3b61fcc7029a270a23c02678210541cfb8210f3%22%2C%22last_refreshed%22%3A1547203352.1523993015%7D\", \"shbid\": \"3269\", \"shbts\": \"1547203352.151642\", \"urlgen\":\"'{176.13.236.108: 1680}:1ghuGr:6MRVpdh2NcBi-agW9HPRXlTxpII'\"}, \"user_agent\": \"Instagram 10.26.0 Android (18/4.3; 320dpi; 720x1280; Xiaomi; HM 1SW; armani; qcom; en_US)\", \"device_id\": \"android-f199571f25f9d969\"}"
                user.username, user.password
            ],
            (err, results) => {
                return {
                    eror: err,
                    userSession: err ? undefined : results[results.length - 1]
                };
            }
        );
    }

    async getFollowers(userSession: string, after?: string) {
        return this.runScript(
            "user_followers.py",
            ["tom7897", "8192426Abc", after, userSession],
            (err, results) => {
                return {
                    error: err,
                    followers: err ? undefined : results[results.length - 1],
                };
            }
        );
    }

    async getFollowings(userSession: string, after?: string) {
        return this.runScript(
            "user_followings.py",
            ["tom7897", "8192426Abc", after, userSession],
            (err, results) => {
                return {
                    error: err,
                    followings: err ? undefined : results[results.length - 1]
                };
            }
        );
    }

    async unfollow(userSession: string, ids: number[]) {
        // ids.forEach(async id => {
        //     await this.instaClient.unfollow({ id });
        // });
        return this.runScript(
            "unfollow.py",
            ["tom7897", "8192426Abc", JSON.stringify(ids), userSession],
            (err, results) => {
                return {
                    error: err,
                    ids: err ? undefined : results[results.length - 1]
                };
            }
        );
    }

    async runScript(
        scriptPath: string,
        args: string[],
        cb: (err, results) => Object
    ) {
        let promise = new Promise((resolve, reject) => {
            PythonShell.run(scriptPath, { args: args }, (err, results) => {
                resolve(cb(err, results));
            });
        });

        return await promise.then(data => {
            return data;
        });
    }
}
export let InstaService = new InstagramService();
