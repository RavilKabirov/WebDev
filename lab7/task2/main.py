from task2.models.Dog import Dog
from task2.models.Cat import Cat

Pes = Dog("Rex", 5, "Labrador")
Koshk = Cat("Murka", 3, "Red")

print(Pes)
print(Koshk)
Pes.makeNoise()
Koshk.makeNoise()
Pes.takeTrail("Kaban")
Koshk.hideToHunt()
Pes.getSpecies()
Koshk.getColor()
print(Pes.makeNoise(), Koshk.makeNoise())
