


import random

# an array of state dictionaries
given_data = [
{
    "name": "Alabama",
    "capital": "Montgomery"
}, {
    "name": "Alaska",
    "capital": "Juneau"
}, {
    "name": "Arizona",
    "capital": "Phoenix"
}, {
    "name": "Arkansas",
    "capital": "Little Rock"
}, {
    "name": "California",
    "capital": "Sacramento"
}, {
    "name": "Colorado",
    "capital": "Denver"
}, {
    "name": "Connecticut",
    "capital": "Hartford"
}, {
    "name": "Delaware",
    "capital": "Dover"
}, {
    "name": "Florida",
    "capital": "Tallahassee"
}, {
    "name": "Georgia",
    "capital": "Atlanta"
}, {
    "name": "Hawaii",
    "capital": "Honolulu"
}, {
    "name": "Idaho",
    "capital": "Boise"
}, {
    "name": "Illinois",
    "capital": "Springfield"
}, {
    "name": "Indiana",
    "capital": "Indianapolis"
}, {
    "name": "Iowa",
    "capital": "Des Moines"
}, {
    "name": "Kansas",
    "capital": "Topeka"
}, {
    "name": "Kentucky",
    "capital": "Frankfort"
}, {
    "name": "Louisiana",
    "capital": "Baton Rouge"
}, {
    "name": "Maine",
    "capital": "Augusta"
}, {
    "name": "Maryland",
    "capital": "Annapolis"
}, {
    "name": "Massachusetts",
    "capital": "Boston"
}, {
    "name": "Michigan",
    "capital": "Lansing"
}, {
    "name": "Minnesota",
    "capital": "St. Paul"
}, {
    "name": "Mississippi",
    "capital": "Jackson"
}, {
    "name": "Missouri",
    "capital": "Jefferson City"
}, {
    "name": "Montana",
    "capital": "Helena"
}, {
    "name": "Nebraska",
    "capital": "Lincoln"
}, {
    "name": "Nevada",
    "capital": "Carson City"
}, {
    "name": "New Hampshire",
    "capital": "Concord"
}, {
    "name": "New Jersey",
    "capital": "Trenton"
}, {
    "name": "New Mexico",
    "capital": "Santa Fe"
}, {
    "name": "New York",
    "capital": "Albany"
}, {
    "name": "North Carolina",
    "capital": "Raleigh"
}, {
    "name": "North Dakota",
    "capital": "Bismarck"
}, {
    "name": "Ohio",
    "capital": "Columbus"
}, {
    "name": "Oklahoma",
    "capital": "Oklahoma City"
}, {
    "name": "Oregon",
    "capital": "Salem"
}, {
    "name": "Pennsylvania",
    "capital": "Harrisburg"
}, {
    "name": "Rhode Island",
    "capital": "Providence"
}, {
    "name": "South Carolina",
    "capital": "Columbia"
}, {
    "name": "South Dakota",
    "capital": "Pierre"
}, {
    "name": "Tennessee",
    "capital": "Nashville"
}, {
    "name": "Texas",
    "capital": "Austin"
}, {
    "name": "Utah",
    "capital": "Salt Lake City"
}, {
    "name": "Vermont",
    "capital": "Montpelier"
}, {
    "name": "Virginia",
    "capital": "Richmond"
}, {
    "name": "Washington",
    "capital": "Olympia"
}, {
    "name": "West Virginia",
    "capital": "Charleston"
}, {
    "name": "Wisconsin",
    "capital": "Madison"
}, {
    "name": "Wyoming",
    "capital": "Cheyenne"
}]


print("\nLets learn the state capitals!\n")
print("You will be prompted for the capital of a state chosen at random, type your answer and press ENTER. Your answers are not case sensitive. Each correct answer gives you 10 points, while an incorrect one deducts 5. Good luck!\n")

states = given_data[:]
score = 0
tally = {
    "correct": 0,
    "wrong": 0
}

def ask_question(states, score, tally):
    if len(states)>0:
        r = random.randint(0,len(states)-1)
        state = states[r]
        answer = input("Whats the capital of the state - {}: ".format(state["name"]))
        if answer.lower() == state["capital"].lower():
            score += 10
            tally["correct"] += 1
            print(f"Correct!\t{tally['correct']}/{tally['correct']+tally['wrong']} answered correctly\t\tYour score is {score}")
        else:
            score -= 5
            tally["wrong"] += 1
            print(f"Incorrect!\t{tally['correct']}/{tally['correct']+tally['wrong']} answered correctly\t\tYour score is {score}")
        # states.remove(state)
        del states[r]
        ask_question(states, score, tally)
    else:
        print(f"\nGame over! You answered {tally['correct']}/{tally['correct']+tally['wrong']} correctly and your final score is {score}")
        play_again = input(f"Do you want to play again - y/n? ")
        if play_again.lower() == "y" or play_again.lower() == "yes":
            states = given_data[:]
            score = 0
            tally = {
                "correct": 0,
                "wrong": 0
            }
            print("\nGame restarting...")
            ask_question(states, score, tally)
        else: 
            print(play_again)
            print("Ok. Bye!")

ask_question(states, score, tally)