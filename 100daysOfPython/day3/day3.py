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


# year = input("enter a year\n")

# if(int(year)%4==0):
#     if(int(year)%100==0):
#         if(int(year)%400==0):
#             print("leap")
#         else:
#             print("not")
#     else:
#         print("leap")
# else:
#     print("not")



# small 15 md 20 large 25 
# peperoni for small +2
# peperoni for medium or large+3

print("Welcome! Order your pizza!")

size = input("what size of pizza you like S,M,L\n")

if size == "S":
    want_roni=input("Peperoni Y / N ?")
    if want_roni == "Y":
        print ("Your total is $17")
    elif(want_roni == "N"):
         print("Your total is $15")
    else:
         print("enter a valid answer")
elif size == "M":
     want_roni=input("Peperoni Y / N ?")
     if want_roni == "Y":
        print ("Your total is $22")
     elif(want_roni == "N"):
         print("Your total is $20")
     else:
         print("enter a valid answer")
elif size == "L":
     want_roni=input("Peperoni Y / N ?")
     if want_roni == "Y":
        print ("Your total is $27")
     elif(want_roni == "N"):
         print("Your total is $25")
     else:
         print("enter a valid answer")

else:
    print("enter a valid size!")