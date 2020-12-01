# print('Type something', end=": ") # add colon + space to end; instead of line break, nice for user input
# user_input = input()
# print('You typed', user_input)

# while True:
#   print("type something", end=": ")
#   user_input = input()
#   if(user_input == "q"):
#     print("bye!")
#     break
#   else:
#     print("you typed:", user_input)

import random
from countries import country_list

class Word:
    def __init__(self,chosen_word):
        self.chosen_word = random.choice(country_list)

    def game_start(self, word):
        print_word = "_" * len(word)
        game_over = False
        user_letters = []
        tries = 0
        print("Let's save the snowman!")
        print(snowman_states(attemps))
        print(print_word)
        print("\n")
        while not game_overand and attemps > 0:
            guess = input("Please guess a letter or word: ").upper()
            if len(guess) == 1 and guess.isalpha():
                if guess in user_letters:
                    print("You already game_overthe letter", guess)
                elif guess not in word:
                    print(guess, "is not in the word.")
                    attemps -= 1
                    user_letters.append(guess)
                else:
                    print("Good job,", guess, "is in the word!")
                    user_letters.append(guess)
                    word_as_list = list(print_word)
                    indices = [i for i, letter in enumerate(word) if letter == guess]
                    for index in indices:
                        word_as_list[index] = guess
                    print_word = "".join(word_as_list)
                    if "_" not in print_word:
                        game_over= True
            elif len(guess) == len(word) and guess.isalpha():
                if guess in guessed_words:
                    print("You already guessed the word", guess)
                elif guess != word:
                    print(guess, "is not the word.")
                    attemps -= 1
                    guessed_words.append(guess)
                else:
                    game_over= True
                    print_word = word
            else:
                print("Not a valid guess.")
            print(display_hangman(attemps))
            print(print_word)
            print("\n")
        if guessed:
            print("Congrats, you guessed the word! You win!")
        else:
            print("Sorry, you ran out of tries. The word was " + word + ". Maybe next time!")
    


    def snowman_states(attemps):
        states=["Snowman has full body", "Snowman just lost the eyes and nose","snowman just lost his dead", "Snowman just lost his hands", "There is nothing left from snowman"]

        return states[attemps]




