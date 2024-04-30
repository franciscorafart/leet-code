# Code Wars - Duplicate Encoder
# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
# Difficulty: 6 kyu

# The goal of this exercise is to convert a string to a new string where each character in the 
# new string is "(" if that character appears only once in the original string, or ")" if that
# character appears more than once in the original string. Ignore capitalization when determining 
# if a character is a duplicate.

# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))((" 
# Notes
# Assertion messages may be unclear about what they display in some languages. 
# If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

def duplicate_encode(word):
    w = word.lower()
    count = dict()
    for ch in w:
        current = count.get(ch, None)
        count[ch] = current + 1 if current is not None else 1
    
    return "".join(["(" if (count[ch] == 1) else ")" for ch in w])
            