# Passwort (Eigentlich Versteckt)
password = bytes([97, 115, 100, 102])

# Alle Möglichkeiten
chars = "abcdefghijklmnopqrstuvwxyz0123456789"

# Brute-force Funktion
def brute_force(password):
    target = password.decode()

    # Beginn mit Länge 1, dann 2, dann 3, ...
    length = 1
    while True:
        # Erstelle den ersten Versuch mit der aktuellen Länge
        attempt = [chars[0]] * length

        while True:
            # Aktuellen Versucht in der Konsole Anzeigen lassen.
            print("".join(attempt))

            # Wenn das aktuelle Versuchspasswort dem echten Passwort entspricht
            if "".join(attempt) == target:
                print("Password found:", target)
                return

            # Erhöht Versuch (Iteriert durch Variable: chars)
            i = len(attempt) - 1
            while i >= 0:
                index = chars.index(attempt[i])
                if index < len(chars) - 1:
                    attempt[i] = chars[index + 1]
                    break
                else:
                    attempt[i] = chars[0]
                    i -= 1

            # Wenn wir alle Möglichkeiten für die aktuelle Länge durch haben, erhöhen wir die Länge
            if i < 0:
                break

        # Erhöhe die Länge und beginne mit der nächsten Länge
        length += 1

brute_force(password)
