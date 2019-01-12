#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Use text editor to edit the script and type in valid Instagram username/password

from InstagramAPIFolder import InstagramAPI
import sys
import json

def getFollowings(api, next_max_id):
    """
    Returns the list of followings of the user.
    """

    followings = []
    if next_max_id == 'empty':
        next_max_id = ''

    _ = api.getSelfUsersFollowing(maxid=next_max_id)
    followings.extend(api.LastJson.get('users', []))

    r = {
        "followings": json.dumps(followings)
    }
    return r


if __name__ == "__main__":
    api = InstagramAPI(sys.argv[1], sys.argv[2])
    
    save_session = json.loads(sys.argv[4])
    api.set_session(**save_session)

    # List of all followings
    r = getFollowings(api, sys.argv[3])
    print(r.get('followings'))
