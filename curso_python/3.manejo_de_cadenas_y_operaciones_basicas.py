#   la informacion que contienen nuestras variables pueden representar diferentes
#   tipos de datos, vamos a empezar por los strings:

#   Stings: Las cadenas o strings se refieren a los datos que son de tipo texto,
#   estas las escribimos entre comillas (ya sean comillas simples '', dobles "", o
#   triples ''' ''')

#   para saber con que tipo de dato estamos trabajando usamos la funcion type()
#   type() = es la funcion que usamos para consultar el tipo de dato que se esta
#   trabajando

name = "carli"
print(type(name))  # lo que nos devuelve es el tipo de dato 'str' que significa string

#   en python se puede utilizar ya sea un caracter o una cadena de texto mas amplia para
#   ser almacenados en esta variable
#       ejp:

character = "c"
print(type(character))  # nos imprime que c es un dato de tipo string o str

#   tambien podemos poner una cadena de texto larga
#       ejp:

chain = "esta es una cadena de texto larga"
print(type(chain))

# existen 3 maneras diferentes de representar los strings:
#   1. comillas dobles = ""
#   2. comillas simples = ''
#   3. comillas triples = ''' '''

#       ejp: usando comillas simples
carro = "este es un carro"  # estoy usando comillas simples (hacen la misma funcion que las comillas dobles "")
#       ejp: usando comillas triples
event = """
este suceso ocurrio gracias a los aprendizajes obtenidos en un lapzo
de tiempo corto
"""
print(event)

# la diferencia con las comillas triples es que podemos escribir textos que contenga mas de una linea, como lo
# puede ser un parrafo o un texto mas largo

# indexacion: es una propiedad que nos permite acceder a la informacion de una variable o una cadena a travez de la posiscion de sus caracteres
# (de izquierda a derecha las posiciones van del 0 en adelante, y de derecha a izquierda van del -1 en adelante)

# como se indexa?
# RTA: print(nombre_variable[1]) se pone el nombre de la variable a indexar, y despues entre corchetes cuadrados '[]' el numero del valor a indexar

# ejemplo:
saludo = "hola mi nombre es anthonny Jeffrey"
print(saludo[0])
print(saludo[:14])
# si no le ponemos nada al inicio o al final (en los valores de la indexacion) el entendera que es desde el  inicio o desde el final
print(saludo[15:])

# si le damos a la indexacion un valor que no existe nos va a devolver un error de indexacion
# ejemplo:
# print(saludo[70])

print(saludo[-1])
print(len(saludo))
print(saludo[34:-4])
print(saludo[-29:])

# con los cadenas podemos hacer dos operaciones importantes:

# concatenacion: se refiere cuando sumamos 2 cadenas
# repeticion: se refire cuando le decimos que queremos multiplicar o repetir cierta cantidad de veces una cadena
# ejemplo de concatenacion:
name = "anthonny jefrey"
last_name = "barrera peñuela"
print(name + " " + last_name)
# cuando se concatena no se añade un espacio entre las cadenas que se juntan, por ende se colocan comillas con un espacio '_'

# una buena practica es usar las mismas comillas siempre y no tener combinacniones de distintos tipos de comillas

# repeticion ejemplo:
texto_a_repetir = "la vaca se la pasa comiendo pasto todos los dias"
print(texto_a_repetir * 4)
# esto es la forma sencilla de hacer la repeticion


# tambien la podemos hacer en el orden inverso
print(5 * texto_a_repetir)

print((texto_a_repetir + "\n"), *5)
