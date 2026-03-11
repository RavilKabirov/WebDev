a = int(input())
i = 0
flag = False
while(2 ** i <= a):
    if(2 ** i == a):
        print("YES")
        flag = True
    i += 1
if(flag == False):
   print("NO")