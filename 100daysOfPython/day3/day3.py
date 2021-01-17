# print("welcome to the rollercoster?")
# heigth = input("Enter your heigth? \n")

# if(int(heigth)>=120):
#     print("You can ride.")
#     age = input("what is your age?\n")
#     if int(age) <= 12:
#         print("you pay $5")
#     if int(age)<=18:
#         print("you pay $8")
#     else:
#         print("you pay $11")
# else:
#     print("Sorry, you are too short to ride!")


# number  = input("enter you number\n")

# if int(number) % 2 == 0:
#     print("even")
# else:
#     print('odd')


year = input("enter a year\n")

if(int(year)%4==0):
    if(int(year)%100==0):
        if(int(year)%400==0):
            print("leap")
        else:
            print("not")
    else:
        print("leap")
else:
    print("not")