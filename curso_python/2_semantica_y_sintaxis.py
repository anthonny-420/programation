# Semántica: Hace referencia al sentido que nosotros le vamos a dar al codigo
#   Ejp: Si por ejemplo vamos a trabajar con ejercicios que incluyen operaciones
#   matematicas y como entradas recibimos numeros, tambien debemos retornar o
#   devolver numeros para que tenga cierta consistencia
# Sintaxis: se refiere a la forma en que escribimos y realizamos las buenas practicas
# en nuestro codigo

print("hola")
print("mundo")

# python es un lenguaje muy estricto a la hora de ser escrito entonces tener cuidado
# con los espacios en lugares en los que no deben ir

# ¿que es una variable?
# primeramente veamos a las computadoras como contenedores de informacion donde podemos
# guardar diferentes tipos de datos, a estos contenedores les podemos dar diferentes
# caracteristicas como los son:
#   -nombre
#   -tipo
#   -dato

# sintaxis de una variable: NOMBRE = DATO QUE LE PASAMOS
# ejp:

nombre = "carli"
saludo = "hola"

print("{} mi nombre es {}".format(saludo, nombre))

# reglas para nombrar variables:
# 1. no se pueden poner numeros al inicio de la variable, despues si se puede poner
#   ejp: 1nombre = joel <-- ERROR

#   lo que si se puede hacer:
n1ombre = "joel"  # <-- Correcto (Osea que si se puede hacer)
print(n1ombre)

# 2. tener cuidado con las palabras reservadas del lenguaje
# (palabras propias del lenguaje que cumplen una funcion por ende no se pueden usar como
# el nombre de la variable, estas se pintan de un color diferente al de las variables)
#   ejp:
#   class = 1970
#   print(class)

# que pasa cuando escribimos la misma variable 2 veces ¿que resultado me mostrara?

casa = "home"
casa = "house"
print(casa)  # el resultado que se mostrara es: house

# esto ocurre por que python es un lenguaje ordenado, lo que significa que se ejecuta de
# arriba hacia abajo y de izquierda a derecha, por ende el segundo valor sobrescribe al
# primero

# 3. podemos usar el guion bajo '_' en el nombre de la variable
# (ya sea en el inicio o en el final, o en cualquier parte que quieras)
#   ejp:
pregunta_usuario = input("dime cual es tu primer apellido")
print(pregunta_usuario)

# es bueno usarlos para nombrar variables que no se pueden definir directamente con un solo
# nombre, lo cual permite tener mejor comprension de que esta haciendo esa variable
