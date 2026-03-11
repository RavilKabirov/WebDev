list = []
a = int(input())
c = 0
for i in range(a):
    b = int(input())
    list.append(b)
for i in range(a // 2):
    temp = list[i]
    list[i] = list[a - i - 1]
    list[a - i - 1] = temp
for i in list:
    print(i, end=" ")