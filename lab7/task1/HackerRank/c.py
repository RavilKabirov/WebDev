s = input()
result = ""

for c in s:
    if c.islower():
        result += c.upper()
    elif c.isupper():
        result += c.lower()
    else:
        result += c

print(result)