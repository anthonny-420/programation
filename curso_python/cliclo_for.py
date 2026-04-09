# Aqui aprenderemos a hacer uso del ciclo for, el cual es una estructura de control que nos permite repetir un bloque de código un número determinado de veces.

fruits = ["pineapple", "banana", "grape", "peach", "watermelon"]

for i in fruits:
    print(f"Registered people tend to like the: {i} ")

# ciclo for usando el range, el cual nos permite generar una secuencia de números enteros, que se pueden usar para iterar sobre una secuencia de elementos.
for i in range(5):
    print((f"Registered people choose the following numbers: {i}"))

for i in range(4, 15):
    print(f"The range created a list of numbers that contains the followings numbers: {i}")


cars = ["lamborghini", "ferrari", "aston martin", "masserati", "bentley"]

for i in cars:
        print(i)
        if i == "aston martin":
            print(f"the {i} has been encountered")

#ahora vamos a usar el ciclo while, este permite ejecutar un bloque de código mientras se cumpla una condición determinada.

x = 0
while x < 5:
     print(f"the value of x is: {x}")
     x += 1

# Uso de break en ciclos
while x < 10:
     print(f"the value of x is: {x}")
     if x == 8:
        break
     x += 1

# Uso de continue en ciclos
for i in range (20):
     if i % 2 == 0:
          continue
     print(f"the value of i is: {i}")