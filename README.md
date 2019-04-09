# food-assistant
Food ordering AI assistant using nodejs as backend and Rasa as ML library.

# To Generate NLU training data with Chatito
    npx chatito rasa_assistant/train_food_bot.chatito --format=rasa --outputPath=./rasa_assistant/data --trainingFileName=train_nlu.json --testingFileName=test_nlu.json

# GUI for rasa-nlu train data
    rasa-nlu-trainer -s rasa_assistant/data/rasa_dataset_training.json
