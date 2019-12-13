"""A prefix-notation calculator.

Using the arithmetic.py file from Calculator Part 1, create the
calculator program yourself in this file.
"""

from arithmetic import *


# Your code goes here
while True:
    input_string = input("write operator then two numbers: ")
    tokens = input_string.split(" ")
    if len(tokens) == 2:
        tokens1 = float(tokens[1])
    elif len(tokens) == 3:
        tokens1 = float(tokens[1])
        tokens2 = float(tokens[2])
    if tokens[0] == "q":
        break
    elif tokens[0] == "+":
        print(add(tokens1, tokens2))
    elif tokens[0] == "-":
        print(subtract(tokens1, tokens2))
    elif tokens[0] == "*":
        print(multiply(tokens1, tokens2))
    elif tokens[0] == "/":
        print(divide(tokens1, tokens2))
    elif tokens[0] == "square":
        print(square(tokens1))
    elif tokens[0] == "cube":
        print(cube(tokens1))
    elif tokens[0] == "pow":
        print(pow(tokens1, tokens2))
    elif tokens[0] == "mod":
        print(mod(tokens1, tokens2))