# -*- coding: utf-8 -*-
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

import logging
import requests
import json
from rasa_core_sdk import Action

logger = logging.getLogger(__name__)


class ActionSearchRestaurants(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_search_restaurants"

    def run(self, dispatcher, tracker, domain):
        # what your action should do
        restaurants = json.loads(requests.get('http://localhost:8080/api/restaurants/').text)
        restaurantNames = ''
        for restaurant in restaurants:
            restaurantNames = restaurantNames + restaurant['name'] +'\n'
        cuisine = tracker.get_slot("cuisine")
        responseMessage = 'Restaurants near you is {}'.format(restaurantNames)
        if cuisine is not None:
            responseMessage = '{} Restaurants near you is {}'.format(cuisine,restaurantNames)
        dispatcher.utter_message(responseMessage)
        return []
