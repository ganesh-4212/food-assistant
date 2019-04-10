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

## Generated Story 1689482577469863660
* greet
    - utter_greet
* food_order{"quantity": "1 plate", "food_item": "masala dosa"}
    - food_order_form
    - form{"name": "food_order_form"}
    - utter_slots_values
* thankyou
    - utter_noworries
## Generated Story -2379406461729782523
* greet
    - utter_greet
* food_order{"quantity": "1 glass", "food_item": "Orange juice"}
    - food_order_form
    - utter_slots_values
* thankyou
    - utter_noworries

## Generated Story 701995439028390742
* greet
    - utter_greet
* food_order{"quantity": "1 plate", "food_item": "Masala Dosa"}
    - food_order_form
    - utter_slots_values
* food_order
    - utter_thanks

## Generated Story 5097013298679942318
* greet
    - utter_greet
* food_order{"quantity": "1 plate", "food_item": "masal dosa"}
    - food_order_form
    - form{"name": "food_order_form"}
    - slot{"food_item": "masal dosa"}
    - slot{"quantity": "1 plate"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - utter_slots_values

## Generated Story -6977990910626548548
* greet
    - utter_greet
* food_order{"quantity": "one plate", "food_item": "masala dosa"}
    - food_order_form
    - form{"name": "food_order_form"}
    - slot{"food_item": "masala dosa"}
    - slot{"quantity": "one plate"}
    - form{"name": null}
    - slot{"requested_slot": null}
    - utter_slots_values

