#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
# Use text editor to edit the script and type in valid Instagram username/password

from InstagramAPIFolder import InstagramAPI
import sys
import json

if __name__ == "__main__":

    api = InstagramAPI('tom7897', '8192426Abc')
    s = sys.argv[1]
    json_acceptable_string = s
    print(s)
    # d = json.loads(json_acceptable_string)
    save_session = json.loads(json_acceptable_string)
    api.set_session(**save_session)
    followers = []
    _ = api.getSelfUserFollowers()
    followers.extend(api.LastJson.get('users', []))
    print(json.dumps(followers))