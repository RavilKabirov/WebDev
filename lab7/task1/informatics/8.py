def xor(a, b):
    if(a == True and b == False or a == False and b == True):
        return True
    return False

a = 1
b = 1
print(xor(a, b))