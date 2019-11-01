"""Generate Markov text from text files."""

from random import choice


def open_and_read_file(file_path):
    """Take file path as string; return text as string.
    
    Takes a string that is a file path, opens the file, and turns
    the file's contents as one string of text.
    """
    dict_keys= {}
    

    contents = open(file_path).read()  # takes the entire txt file as a string
    words = contents.split()  # split string by any kinds of whitespace
    
    for idx in range(len(words)-2):
        key = words[idx], words[idx+1]  # creates a tuple of keys
        if dict_keys.get(key) is None: #if the key (tuple) is not in the dict.
            dict_keys[key] = [words[idx+2]]  # adds the tuple keys and values to the dictionary
        else:
            dict_keys[key].append(words[idx+2])  # if the key is already in the dictionary, the     append the value to the matching key in the dictionary
            print(dict_keys)
    #for idx, item in enumerate(lst):  # looping through lst and capturing the index
        #print(item[])

        #if item[0] in dict_keys:  # if the i at index 0(the key) is found in dict_keys
            #dict_keys[item[0]]  # 

    
   



    return dict_keys #returns list
#print(open_and_read_file('green-eggs.txt')) #prints and calls function with green eggs file as arg


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

    chains = {}

    # your code goes here

    return chains


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
