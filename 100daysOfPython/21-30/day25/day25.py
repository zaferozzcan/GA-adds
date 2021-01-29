# file = open("zafer.txt")

# content = file.read()

# print(content)

# file.close()


with open("zafer.txt") as file:
    content = file.read()
    print(content)