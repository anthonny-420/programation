# Los diccionarios son una estructura que almacenan 2 tipos de datos, la clave y el valor.
# Una palabra de un diccionario seria la clave y su significado seria el valor.

# Para crear un diccionario se utilizan las {} y la clave y el valor se separan por : seguidos de una ,

numbers = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
}

# Se accede a la información del diccionario a través de la clave, por ejemplo:
print(numbers[4]) # Esto nos devuelve "four"

personal = {
    "name" : "Mike",
    "last_name" : "thompson",
    "age" : 27,
    "height" : 1.83,
}

# podemos eliminar un elemento del diccionario usando la palabra reservada del
print(personal)
del personal["last_name"]
print(personal)
print(personal["height"])
keys = personal.keys() # Esto nos devuelve una lista con las claves del diccionario
print(keys)
values = personal.values()
print(values)
tuples = personal.items()
print(tuples)

#creacion de un diccionario de diccionarios
dictionary = {
    "pedro" : {
        "last_name" : "gomez",
        "age" : 30,
        "height" : 1.87
    },
    "raquel" : {
        "last_name" : "lopez",
        "age" : 25,
        "height" : 1.65
    },
    "uriel" : {
        "last_name" : "garcia",
        "age" : 28,
        "height" : 1.72
    }
}
print(dictionary["pedro"])