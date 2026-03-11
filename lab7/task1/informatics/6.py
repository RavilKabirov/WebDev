def gmin(a, b, c, d):
    if(a > b and a > c and a >d):
        return a
    elif(b > a and b > c and b> d):
        return b
    elif(c > a and c > b and c > d):
        return c
    return d
a = int(input())
b = int(input())
c = int(input())
d = int(input())
print(gmin(a, b, c, d))