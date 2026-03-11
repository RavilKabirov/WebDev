list = []
a = int(input())
c = False
for i in range(a):
    b = int(input())
    list.append(b)
for i in range(1, a):
    if(list[i] > 0 and list[i - 1] > 0 or list[i] < 0 and list[i - 1] < 0):
        c = True
if(c):
    print("YES")
else:
    print("NO")