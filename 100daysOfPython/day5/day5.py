

print(["apple" for item in range(4)])



score  = [1,21,66,78,100,69]

max_num = 0
for item in score:
    if item>max_num:
        max_num = item

print(max_num)
print("=================================================")


for number in range(1,21):
    if(number%3==0):
        if(number%5==0):
            print("FizzBuzz")
        else:
            print("Fizz")
    elif(number%5==0):
        print("Buzz")
    else:
        print(number)