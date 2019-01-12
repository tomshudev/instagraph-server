from InstagramAPIFolder import InstagramAPI
import sys
import json

def login(username, password):
    api = InstagramAPI(username, password)
    save_session = {}
    if (api.login()):
        save_session = {'token': api.token,
                    'username_id': api.username_id,
                    'rank_token': api.rank_token,
                    'uuid': api.uuid,
                    'session': api.s.cookies.get_dict(),
                    'user_agent': api.USER_AGENT,
                    'device_id': api.device_id}
        print('Login success!')
        print(json.dumps(save_session))
    else:
        print('Can\'t logn')

if __name__ == "__main__":
    login(sys.argv[1], sys.argv[2])