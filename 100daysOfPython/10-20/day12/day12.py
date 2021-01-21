import radnom

def def_level():
    level  = input("Choose a difficulty.Type 'easy' or 'hard': ")
    if level.lower() == "easy":
        return 10
    elif level.lower() == "hard":
        return 5
    else:
        print("Invalid entry")
        def_level()

difficulty = def_level()

def random_number():
    random_number = 