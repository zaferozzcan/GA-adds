# class Dog():
#   total_dogs = 0
#   def __init__(self, name="", age=0 ,color=""):
#     self.name = name
#     self.age = age
#     self.color = color
#     Dog.total_dogs += 1
#     print(name, "created:", self)

#   def bark_hello(self):
#       print("Woof! I am called", self.name, "I am", self.color, "and I am", self.age, "human-years old.")
#       print("There are", Dog.total_dogs, "dogs in this room!")


# kopuk = Dog("Kopuk", 8,"white")
# kopuk.bark_hello()



# class Parent():
#     def __init__(self):
#         self.first_name="Lorelei"
#         self.last_name="Gilmore"
#         print("Prent initialize:", self)

#     def hello(self):
#         print("Hey, I am ", self.first_name,". welcome to Dragonfly")


# class Child(Parent):
#     def __init__(self):
#         Parent.__init__(self)
#         self.first_name = "Rory"
#         print("Child Initialized:",self)



# mom = Parent()

# dougther = Child()

# mom.hello()

# dougther.hello()

class BankAccount():
    account_total=1000
    def __init__(self,account_type="",balance=0):
        self.account_type = account_type
        self.balance = balance
    
    def withdraw(self, amount):
        


