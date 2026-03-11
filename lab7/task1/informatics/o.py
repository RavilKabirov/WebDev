a = int(input())
b = a
for i in range(2, int(a / 2)):
    c = a % i
    if(c == 0 and i < b):
        b = i 
print(b)