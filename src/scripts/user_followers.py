#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Use text editor to edit the script and type in valid Instagram username/password

from InstagramAPIFolder import InstagramAPI
import sys
import json

def getFollowers(api, user_id):
    """
    Returns the list of followers of the user.
    """

    followers = []
    next_max_id = True
    while next_max_id:
        # first iteration hack
        if next_max_id is True:
            next_max_id = ''

        _ = api.getUserFollowers(user_id, maxid=next_max_id)
        followers.extend(api.LastJson.get('users', []))
        next_max_id = api.LastJson.get('next_max_id', '')

    r = {
        "followers": json.dumps(followers)
    }
    return r


if __name__ == "__main__":
    api = InstagramAPI(sys.argv[1], sys.argv[2])

    save_session = json.loads(sys.argv[4])
    api.set_session(**save_session)

    # List of all followers
    r = getFollowers(api, api.username_id)
    print(r.get('followers'))
