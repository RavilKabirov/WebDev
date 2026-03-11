list = []
a = int(input())
for i in range(a):
    b = int(input())
    list.append(b)
for i in range(a):
    if(list[i] % 2 == 0):
        print(list[i], end=" ")