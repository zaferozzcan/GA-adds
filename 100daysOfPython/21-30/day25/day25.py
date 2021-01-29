# file = open("zafer.txt")

# content = file.read()

# print(content)

# file.close()


# with open("zafer.txt") as file:
#     content = file.read()
#     print(content)


with open("zafer.txt", "a") as file:
    
    file.write("\nI am a line written by the write method!")