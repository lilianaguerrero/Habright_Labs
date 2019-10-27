
def word_count(file):

    text_file = open(file)

    wordcount_dict = {}

    for line in text_file:
        line = line.rstrip()
        line = line.split(" ")

        for word in line:
           wordcount_dict[word] = wordcount_dict.get(word, 0) + 1

           # dict[key] = value

    for key, value in wordcount_dict.items():
        print(key, value)

word_count("test.txt")
