a = 109
v = int(input())
t = int(input())
if(v > 0):
    print(v * t % a)

else:
    print((109 + v * t) % 109)
