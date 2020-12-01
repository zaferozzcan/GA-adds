# giving class attributes
# anytime we make an instance of a class, python runs _init method automatically
# so we dont need to call it in anywhere in the code

class User:
    def __init__(self, first, last, age): # first, last and age is called instance attributes
        self.first = first
        self.last = last
        self.age = age
    
    def full_name(self):   # this is a instance method
        print("Hello I am {}{}, and {} years old".format(self.first, self.last,self.age))


        
    
user1 = User("Joe", 'Smith', 67)
user1.full_name()

