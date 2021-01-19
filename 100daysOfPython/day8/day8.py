alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
my_string = "xyz"

final_word = ""
for char in my_string:
    index_in_alphabet  = alphabet.index(char)

    encrypted_char_index = index_in_alphabet+5
    print(encrypted_char_index)
    final_word = final_word+ alphabet[encrypted_char_index]

print(final_word)





