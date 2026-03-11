list = []
a = int(input())
c = 0
for i in range(a):
    b = int(input())
    list.append(b)
for i in list:
    if(i > 0):
        c += 1
print(c)