to_do = ["Dirigirnos al hotel",
         "Ir a almorzar",
         "Visitar un museo",
         "Volver al hotel"]
print(to_do)

numbers = [1,2,3,4,
           'cinco',]
print(type(numbers))
#este tipo de datos son de tipo string

mix = ["hola",
       2,
       True,
       43.394,
       [1,2,3,]]
print(len(mix))
#esto me dice la longitud (lenght) que tiene una lista o algo que tenga varios datos entre si (duplas, diccionarios, etc)

print("Primer elemento", mix[0])
print("Cuarto elemento", mix[3])
print("Quinto elemento", mix[-1])

# INDEXING = Acceder a un valor de una cadena, lista o etc a traves de su posición
# SLICING = Extraer porciones de información indicando desde donde y hasta donde queremos tomar

string = "Hola Mundo"

print("Primer elemento", string[0])
print("Cuarto elemento", string[3])
print("Quinto elemento", string[-1])

print(mix[ :3])
print(mix[-3: ])
print(mix[2:-2])

print(mix)
mix.append(False)
print(mix)

# si tenemos una lista dentro de otra lista, esta sera completamente independiente
mix.append(["a", "b", "c"])
print(mix)
mix.insert(1,["f", "g"])
print(mix)
print(mix.index([1, 2, 3]))

numbers = [1.1,2,90,3,26.459,4,5,80]
print("mayor",max(numbers))
print("menor", min(numbers))

print(numbers)
del numbers[4]
print(numbers)
del numbers[4]
del numbers[2:5]
print(numbers)

# copiar información de una variable a otra teniendo en cuenta que el espacio en la memoria ram sea el mismo.
a = [1,2,3,4,5]
b = a
print (id(a))
print (id(b))

# si imprimimos cada una de las variables, veremos que cada una tiene la misma información, y si imprimimos esto acompañado de la función id veremos que tienen el mismo espacio en ram
# lo que significa si yo realizo cambios en a se verán reflejados en b

del a[0]
print(a)
print(b)

# para que no nos ocurra esto de copiar la información de una variable a otra pero de manera dependiente, tenemos que hacer uso del METODO SLICING:

c = a[:]
print("A -->",a)
print("C -->",c)
print(id(a))
print(id(c))
a.append(6)
print(a)
print(c)
print(type(numbers))

