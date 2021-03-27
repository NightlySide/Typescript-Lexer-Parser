import numpy

def add(a, b):
    return a + b

def addnp(a, b):
    return numpy.add(a, b)

print(add(5, 3))

c = 0
while c < 10:
    c += 1.5