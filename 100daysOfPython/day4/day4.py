import random

random_integer = random.randint(1,10) # ineteger

random_float = random.random() * 5 +1

print(random_integer)
print(random_float)

score = random.randint(1,100)
print(f"your score is {score}")

def generate_coin_flip():
    random_n = random.randint(1,2)
    print("random in coin", random_n)
    if random_n == 1:
        return "head"
    return "tail"


print(generate_coin_flip())


my_list = ["dog","cat", "mouse", "monkey"]

my_list[3] = "rabbit"

my_list.append("monkey")

my_list.extend(["elephant","horse"])


my_string = "hello,from,the,otherside"

dinner_list = "Jane,Michael,Ali,Steph,Sarah"

dinner_list_names=dinner_list.split(",")

selected_name = dinner_list_names[random.randint(0,len(dinner_list_names)-1)]

print(selected_name)

my_nested_list=[1,2,["zafer", "ecem",["kopuk","yoshi"]]]

print(my_nested_list[2][2][1])




