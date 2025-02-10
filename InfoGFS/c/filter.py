
input_file = 'string_output.txt'
output_file = 'filtered_output.txt'

special_letter = ['@', '_', '-', '.', '%', '/']

with open(input_file, 'r') as f_in, open(output_file, 'w') as f_out:
    for line in f_in:
        if not any(letter in line for letter in special_letter):
            f_out.write(line)

print("Done")