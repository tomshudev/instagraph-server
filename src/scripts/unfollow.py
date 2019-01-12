from InstagramAPIFolder import InstagramAPI
import sys
import json

if __name__ == "__main__":
    api = InstagramAPI(sys.argv[1], sys.argv[2])

    save_session = json.loads(sys.argv[4])
    api.set_session(**save_session)

    for userID in json.loads(sys.argv[3]):
        api.unfollow(userID)

    print(sys.argv[3])