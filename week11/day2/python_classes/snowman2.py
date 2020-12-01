import random
from countries import country_list

class Word:
    def __init__(self, chosen_word):
        self.chosen_word = random.choice(country_list)