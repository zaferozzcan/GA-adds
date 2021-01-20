# calculate how much each pays

subtotal = input("Hown musch is the subtotal?\n ")

total_people = input("How many split? \n")

tip = input("Tip percentage? \n")

each_pay  = (int(subtotal)  + int(subtotal) * int(tip)/100)/int(total_people)

print("\nEach pays "+ str(each_pay))