if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    s = 0
    n = 0
    for i in student_marks[query_name]:
        s += i 
        n += 1
    res = s / n 
    
    print(f"{res:.2f}")