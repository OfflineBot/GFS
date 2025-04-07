# Passwort (Eigentlich Versteckt)
binary_password = bytes([97, 115, 100, 102])

# Wörterliste laden
def load_wordlist(filename):
    with open(filename, 'r') as file:
        return [line.strip() for line in file.readlines()]

# Dictionary-Angriff Funktion
def dictionary_attack(binary_password, wordlist):
    target = binary_password.decode()
    
    for word in wordlist:
        print("Versuche: ", word)
        if word == target:
            print("Passwort gefunden:", target)
            return
    print("Passwort nicht gefunden.")

# Wörterliste laden
wordlist = load_wordlist('./word_list.txt')

# Dictionary-Angriff starten
dictionary_attack(binary_password, wordlist)
