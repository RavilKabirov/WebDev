from .Animal import Animal


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age)
        self.species = color
    def hideToHunt(self):
        print("Cat is now waiting for prey in ambush...")
        return
    
    def getColor(self):
        print("Color of that car is", self.species)
    def makeNoise(self):
        return "Meow meow"
