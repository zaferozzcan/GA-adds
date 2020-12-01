# # giving class attributes
# # anytime we make an instance of a class, python runs _init method automatically
# # so we dont need to call it in anywhere in the code

class User:
    active_users = 0
    total_users= 0

    @classmethod
    def display_total_user(cls):
        print("there are currently {} total user created!".format(User.total_users))

    @classmethod
    def instance_from_whole_string(cls, string):
        first, last , age = string.split(",")
        return cls(first, last, int(age))


    def __init__(self, first, last, age): # first, last and age is called instance attributes
        self.first = first
        self.last = last 
        self.age = age
        User.total_users +=1
        
    def full_name(self):   # this is a instance method
        print("Hello I am {}{}, and {} years old".format(self.first, self.last,self.age))

    def likes(self, thing):
        print("{} likes {}".format(self.first, thing))

    def birthday(self):
        self.age +=1

    def login(self):
        User.active_users +=1

    def logout(self):
        User.active_users -= 1
    
    def show_active_users(self):
        print("total active users {}".format(User.active_users))
    
user1 = User("Joe", 'Smith', 67)
user2 = User("Monica", "James", 55)
user1.login()
user2.login()

# User.display_total_user()
user3 = User.instance_from_whole_string("Zafer,Ozcan,58")

user3.full_name()



# class BankAccount:
#     def __init__(self, owner, balance=0):
#         self.owner = owner
#         self.balance= balance
#         print("This is {}'s bank account".format(self.owner))
    
#     def deposit(self, amount):
#         print("Deposit amount: {}".format(amount))
#         self.balance += amount 
#         print("Your balance is {}".format(self.balance))
#         return self.balance
#     def withdraw(self, amount):
#         print("Wuthdraw amount: {}".format(amount))
#         self.balance -= amount
#         print("Your balance is {}".format(self.balance))
#         return self.balance
        
# bank_account1 = BankAccount("Zafer")
# print(bank_account1)
# bank_account1.deposit(1000)
# bank_account1.withdraw(250)




# class Pet:
#     allowed = ["cat", "dog", "fist", "rat"] # this is a class attribute
#     def __init__(self, name,species):
#         if species not in Pet.allowed:
#             raise ValueError("{} cannot be a pet".format(species))
#         else:
#             self.name= name
#             self.species = species
#     def set_species(self, newSpecies):
#         if newSpecies not in Pet.allowed:
#             raise ValueError("Your cannot change species to {}".format(newSpecies))
#         else:
#             self.species = newSpecies



# cat = Pet("Blue", "cat")
# dog = Pet("Wyatt", "dog")

