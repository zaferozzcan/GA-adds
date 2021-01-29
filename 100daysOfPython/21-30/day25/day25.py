# file = open("zafer.txt")

# content = file.read()

# print(content)

# file.close()


# with open("zafer.txt") as file:
#     content = file.read()
#     print(content)


# with open("zafer.txt", "a") as file:
    
#     file.write("\nI am a line written by the write method!")



with open("names.txt") as names_list:
    names = names_list.readlines()
   

with open("starting_file.txt") as letter_file:
    letter_content = letter_file.read()
    for name in names:
        new_letter = letter_content.replace("[name]", name)
        with open(f"./output/{name}.txt","w") as completed_letter:

            completed_letter.write(new_letter)