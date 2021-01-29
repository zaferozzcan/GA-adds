
menu = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

profit = 0
resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
}

is_on= True

while is_on:
    choice =input("What would you like to drink?(Expresso,Latte,Cappuccino)\n")
    if(choice == "off"):
        print(f"Machine's turned off")
        is_on = False
    elif choice=="report":
        print(f"Water:{resources['water']}")
        print(f"Water:{resources['milk']}")
        print(f"Water:{resources['coffee']}")
        print(f"{profit}")
    else:


def is_resource_sufficient(order_item):

    for ings in menu[order_item]["ingredients"]:

        print(ings)


is_resource_sufficient("latte")