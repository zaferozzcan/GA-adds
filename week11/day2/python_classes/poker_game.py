# # giving class attributes
# # anytime we make an instance of a class, python runs _init method automatically
# # so we dont need to call it in anywhere in the code

# class User:
#     def __init__(self, first, last, age): # first, last and age is called instance attributes
#         self.first = first
#         self.last = last
#         self.age = age
    
#     def full_name(self):   # this is a instance method
#         print("Hello I am {}{}, and {} years old".format(self.first, self.last,self.age))

#     def likes(self, thing):
#         print("{} likes {}".format(self.first, thing))

#     def birthday(self):
#         self.age +=1
        
    
# user1 = User("Joe", 'Smith', 67)
# user1.full_name()
# user1.birthday()
# user1.full_name()


class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance= balance
        print("This is {}'s bank account".format(self.owner))
    
    def deposit(self, amount):
        print("Deposit amount: {}".format(amount))
        self.balance += amount
        print("Your balance is {}".format(self.balance))
        return self.balance
    def withdraw(self, amount):
        print("Wuthdraw amount: {}".format(amount))
        self.balance -= amount
        print("Your balance is {}".format(self.balance))
        return self.balance
        

bank_account1 = BankAccount("Zafer")
print(bank_account1)
bank_account1.deposit(1000)
bank_account1.withdraw(250)