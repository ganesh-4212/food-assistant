## happy path
* greet
    - utter_greet
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
    - form{"name": null}
    - utter_slots_values
* thankyou
    - utter_noworries

## unhappy path
* greet
    - utter_greet
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
* thankyou
    - utter_noworries

## very unhappy path
* greet
    - utter_greet
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
* thankyou
    - utter_noworries

## stop but continue path
* greet
    - utter_greet
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
* stop
    - utter_ask_continue
* affirm
    - food_order_form
    - form{"name": null}
    - utter_slots_values
* thankyou
    - utter_noworries

## stop and really stop path
* greet
    - utter_greet
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
* stop
    - utter_ask_continue
* deny
    - action_deactivate_form
    - form{"name": null}

## chitchat stop but continue path
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
* stop
    - utter_ask_continue
* affirm
    - food_order_form
    - form{"name": null}
    - utter_slots_values
* thankyou
    - utter_noworries

## stop but continue and chitchat path
* greet
    - utter_greet
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
* stop
    - utter_ask_continue
* affirm
    - food_order_form
* thankyou
    - utter_noworries

## chitchat stop but continue and chitchat path
* greet
    - utter_greet
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
* stop
    - utter_ask_continue
* affirm
    - food_order_form
* thankyou
    - utter_noworries

## chitchat, stop and really stop path
* greet
    - utter_greet
* food_order
    - food_order_form
    - form{"name": "food_order_form"}
* stop
    - utter_ask_continue
* deny
    - action_deactivate_form
    - form{"name": null}