#include <stdio.h>
#include <string.h>

#define MAX_PASSWORD_LENGTH 100

// Hardcoded password
const char hardcoded_password[MAX_PASSWORD_LENGTH] = "secretPassword";

// Function to authenticate user input against the hardcoded password
int authenticate(char *input_password) {
    if (strcmp(input_password, hardcoded_password) == 0) {
        return 1; // Authentication successful
    } else {
        return 0; // Authentication failed
    }
}

int main() {
    char input_password[MAX_PASSWORD_LENGTH];

    printf("Enter the password: ");
    scanf("%s", input_password);

    if (authenticate(input_password)) {
        printf("Authentication successful. Access granted.\n");
    } else {
        printf("Authentication failed. Access denied.\n");
    }

    return 0;
}