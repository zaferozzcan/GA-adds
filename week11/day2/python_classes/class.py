class Dog():
    def __init__(self, name="", age=""):
        self.name=name
        self.age=age
    
    def bark_hello(self):
        print("Woof! I am called", self.name, "and I am", self.age, "human-years old.")

kopuk = Dog("Kopuk", 8)

kopuk.bark_hello()