list = []
a = int(input())
for i in range(a):
    b = int(input())
    list.append(b)
for i in range(0, len(list), 2):
    print(list[i], end=" ")