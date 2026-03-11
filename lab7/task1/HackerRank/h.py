def average(array):
    s = set(array)
    sum = 0
    n = 0
    for i in s:
        sum += i 
        n += 1
    return sum / n
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)