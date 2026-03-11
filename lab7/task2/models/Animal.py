class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __str__(self):
        return "Name: " + self.name + ". Age: " + str(self.age)
    def eat(self, food):
        print(self.name, "ate", food)
        return
    def makeNoise(self):
        print("grrrr...")


