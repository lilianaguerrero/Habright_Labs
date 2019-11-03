"""Generate Markov text from text files."""

import random


def open_and_read_file(file_path):
    """Take file path as string; return text as string.
    
    Takes a string that is a file path, opens the file, and turns
    the file's contents as one string of text.
    """
   
    contents = open(file_path).read()  # takes the entire txt file as a string
    global words
    words = contents.split()  # split string by any kinds of whitespace

    return words
open_and_read_file('green-eggs.txt') #calls function with green eggs file as arg


def make_chains(text_string):
    """Take input text as string; return dictionary of Markov chains.

    A chain will be a key that consists of a tuple of (word1, word2)
    and the value would be a list of the word(s) that follow those two
    words in the input text.

    For example:

        >>> chains = make_chains("hi there mary hi there juanita")

    Each bigram (except the last) will be a key in chains:

        >>> sorted(chains.keys())
        [('hi', 'there'), ('mary', 'hi'), ('there', 'mary')]

    Each item in chains is a list of all possible following words:

        >>> chains[('hi', 'there')]
        ['mary', 'juanita']
        
        >>> chains[('there','juanita')]
        [None]
    """
    dict_keys = {}
    lst = []

    for idx in range(len(words) - 2):
        key = (words[idx], words[idx + 1])  # creates a tuple of keys
        if dict_keys.get(key) is None: #if the key (tuple) is not in the dict.
            dict_keys[key] = [words[idx + 2]]  # adds the tuple keys and values to the dictionary
        else:
            dict_keys[key].append(words[idx + 2])  # if the key is already in the dictionary, then append the value to the matching key in the dictionary
           
    
    
    keys = dict_keys.keys() # grabs all the keys in the dictionary
    # for key in keys: 
        word2 = key[1] # grabs second string in key (tuple)
        rand_value = random.choice(dict_keys[key])  # grabs random value from key value list
        new_key = word2, rand_value # creates new key (tuple) from the second word (first key( tuple)) and the random value from the list

        if new_key in dict_keys: # checks if the newly generated key (tuple) is in the dictionary
            rand_val = random.choice(dict_keys[new_key]) # if it is in the dictionary then grab a random value from the list associate to the new_key


            lst.append(key[0])
            lst.append(key[1])
            lst.append(new_key[1])
            lst.append(rand_val)


            print(lst)

            
        else:
            return None

    

    # your code goes here

    return dict_keys

print(make_chains("green-eggs.txt"))


def make_text(chains):
    """Return text from chains."""

    words = []

    # your code goes here

    return " ".join(words)


input_path = "green-eggs.txt"

# Open the file and turn it into one long string
input_text = open_and_read_file(input_path)

# Get a Markov chain
chains = make_chains(input_text)

# Produce random text
random_text = make_text(chains)

#print(random_text)
