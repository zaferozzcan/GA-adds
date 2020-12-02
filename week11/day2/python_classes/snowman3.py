country_list=[
    "Afghanistan",
    "Albania",
    "Algeria",
    "AmericanSamoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire",
    "BosniaandHerzegovina",
    "Botswana",
    "BouvetIsland",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cabo Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "CzechRepublic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "DominicanRepublic",
    "Ecuador",
    "Egypt",
    "ElSalvador",
    "EquatorialGuinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "FrenchGuiana",
    "FrenchPolynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of Kosovo",
    "Réunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "TrinidadandTobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "TurksandCaicosIslands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "UnitedArabEmirates",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]


import random

class Word:
    all_user_guesses=[]
    correct_guesses=[]
    max_tries=5

    def __init__(self, word_chosen):
        self.word_chosen=word_chosen
    
    def greeting(self):
        print("The words to be guessed is a country's name.\nThe game is not case sensetive.\nthere is space in the name\nYou have only 5 attemp to save snowman from getting destroyed!\n")
        print("Lets save the snowman! Good Luck")
        print("Here is your word to guess ⬇️") 

    def get_word(self):
        return self.word_chosen

    def print_word(self):
        word=[char for char in self.word_chosen if char != " "]
        return_word = ""
        for char in word:
            if char in Word.correct_guesses:
                return_word=return_word + " " +char
            else:
                return_word= return_word + " _"
        print("\n")
        print(return_word+"\n\n")

    def start_over(self):
        Word.all_user_guesses=[]
        Word.correct_guesses=[]
        Word.max_tries=5
        word = Word(random.choice(country_list))
        word.print_word()
        word.ask_user_guess()
        

    def game_over(self):
        print("Game is Over")
        print("The word was {}".format(self.word_chosen))
        wanna_play = input("Do you wanna play again?[yes/no]")
        if wanna_play.lower() == "yes":
            Word.start_over(self)
        else:
            print("Thanks for playing!")

    def win_statement(self):
        print("Yay! You won!")
                
    def ask_user_guess(self):
        print("Enter your guess or type exit to finish the game", end=": ")
        user_input = input()
        if(user_input == "exit"):
            print("bye!")
        else:
            if Word.max_tries==1:
                Word.game_over(self)
            elif len(Word.correct_guesses)==len(Word.get_word(self)):
                Word.win_statement(self)
            else:
                word=[char.lower() for char in self.word_chosen if char != " "]
                if user_input in Word.all_user_guesses:
                    print("You have guessed this letter?")
                    print("Pick another one.")
                    Word.all_user_guesses.append(user_input)
                    Word.print_word(self)
                    Word.ask_user_guess(self)
                elif user_input in word:
                    print("Good Job!!")
                    Word.correct_guesses.append(user_input)
                    Word.all_user_guesses.append(user_input)
                    Word.print_word(self)
                    Word.ask_user_guess(self)
                else:
                    print("Opps!")
                    Word.max_tries -= 1
                    Word.all_user_guesses.append(user_input)
                    Word.print_word(self)
                    print("You have {} attemp left".format(Word.max_tries))
                    self.ask_user_guess()

print("\n\n\n\n\n\n\n\n\n\n")
word = Word(random.choice(country_list))
word.greeting()
word.print_word()
word.ask_user_guess()