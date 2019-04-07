## story_greet <!--- The name of the story. It is not mandatory, but useful for debugging. --> 
* greet
 - utter_greet
 
## story_goodbye
* goodbye
 - utter_goodbye

## story_thanks
* thanks
 - utter_thanks
 
## story_search_restaurants
* restaurant_search
 - action_search_restaurants
 

## story_search_restaurants_veg
* restaurant_search{"cuisine":"veg"}
 - action_search_restaurants

 ## story_search_restaurants_non_veg
* restaurant_search{"cuisine":"non-veg"}
 - action_search_restaurants
 
## story_search_restaurants_non_complete
* greet
 - utter_greet
* restaurant_search{"cuisine":"non-veg"} 
 - action_search_restaurants
* thanks
 - utter_thanks
* goodbye
 - utter_goodbye 