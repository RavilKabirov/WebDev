list = []
a = int(input())
c = 0
for i in range(a):
    b = int(input())
    list.append(b)
for i in range(1, a - 1):
    if(list[i] > list[i - 1] and list[i] > list[i + 1]):
        c += 1

print(c)