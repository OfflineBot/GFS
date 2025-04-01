# Passwort (Eigentlich Versteckt)
password = bytes([97, 115, 100, 102])

# Alle Möglichkeiten
chars = "abcdefghijklmnopqrstuvwxyz0123456789"

# Brute-force Funktion
def brute_force(password):
    target = password.decode()
    attempt = [chars[0]] * len(target)
    
    while True:
        # Aktuellen Versucht in der Konsole Anzeigen lassen. 
        print(",".join(attempt).split(','))

        # Wenn das aktuelle Versuchspasswort dem echten Passwort entspricht
        if "".join(attempt) == target:
            print("Password found:", target)
            return
        
        # Erhöht Versuch (Iteriert duch Variable: chars)
        i = len(attempt) - 1
        while i >= 0:
            index = chars.index(attempt[i])
            if index < len(chars) - 1:
                attempt[i] = chars[index + 1]
                break
            else:
                attempt[i] = chars[0]
                i -= 1

brute_force(password)