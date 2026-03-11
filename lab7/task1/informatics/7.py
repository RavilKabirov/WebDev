def step(a, b):
    c = a
    for i in range(b):
        a = a * c
    return a
a = int(input())
b = int(input())
print(step(a, b))