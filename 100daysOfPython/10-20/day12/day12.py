import random

def def_level():
    level  = input("Choose a difficulty.Type 'easy' or 'hard': ")
    if level.lower() == "easy":
        return 10
    elif level.lower() == "hard":
        return 5
    else:
        print("Invalid entry")
        def_level()



def random_number(limit=100):
    random_number = random.randint(0,limit+1)
    return random_number



def ask_guess_and_compare():
    attempt = difficulty
    guess = input("What is your guess?\n")
    
    if guess ==  number:
        print("You won!")
    else:
        attempt -=1
        print(f"You have {attempt} to guess the number.")
        
    
    if attempt == 0:
        print("You lost the game!")
        return

difficulty = def_level()
print(difficulty)
number = random_number()
ask_guess_and_compare()
