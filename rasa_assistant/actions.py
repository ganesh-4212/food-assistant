# -*- coding: utf-8 -*-
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

import logging
import requests
import json
from rasa_core_sdk import Action
from rasa_core_sdk.events import SlotSet
from rasa_core_sdk.forms import FormAction, REQUESTED_SLOT

logger = logging.getLogger(__name__)


class FoodOrderForm(FormAction):
    def name(self):
        return "food_order_form"

    @staticmethod
    def required_slots(tracker):
        return ["food_item", "quantity"]

    @staticmethod
    def validate(self, dispatcher, tracker, domain):
        slot_values = self.extract_other_slots(dispatcher, tracker, domain)
        return [SlotSet(slot, value) for slot, value in slot_values.items()]

    def slot_mappings(self):
        # type: () -> Dict[Text: Union[Dict, List[Dict]]]
        """A dictionary to map required slots to
            - an extracted entity
            - intent: value pairs
            - a whole message
            or a list of them, where a first match will be picked"""

        return {"food_item": self.from_entity(entity="food_item"),
                "quantity": [self.from_entity(entity="quantity",
                                              intent=["food_order"]),
                             self.from_entity(entity="number")]}

    def submit(self, dispatcher, tracker, domain):
        dispatcher.utter_template("utter_submit", tracker)
        return []


# class ActionSearchRestaurants(Action):
#     def name(self):
#         # define the name of the action which can then be included in training stories
#         return "action_search_restaurants"

#     def run(self, dispatcher, tracker, domain):
#         # what your action should do
#         restaurants = json.loads(requests.get('http://localhost:8080/api/restaurants/').text)
#         restaurantNames = ''
#         for restaurant in restaurants:
#             restaurantNames = restaurantNames + restaurant['name'] +'\n'
#         cuisine = tracker.get_slot("cuisine")
#         responseMessage = 'Restaurants near you is {}'.format(restaurantNames)
#         if cuisine is not None:
#             responseMessage = '{} Restaurants near you is {}'.format(cuisine,restaurantNames)
#         dispatcher.utter_message(responseMessage)
#         return []
