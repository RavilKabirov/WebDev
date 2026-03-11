from .Animal import Animal


class Dog(Animal):
    def __init__(self, name, age, species):
        super().__init__(name, age)
        self.species = species
    def takeTrail(self, prey):
        print("Dog took a trail of", prey)
        return
    def getSpecies(self):
        print("Species of that dog is", self.species)
    def makeNoise(self):
        return "Bark bark"
