// 4- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
let str = "programación";
let strMayuscula = str.toUpperCase();
console.log("El texto en mayúscula es: " + strMayuscula);

// 5- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
let strA = "arquitectura";
let strSubcadena = strA.substring(0, 5);
console.log("Los primeros 5 caracteres son: " + strSubcadena);

// 6- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
let strB = "desarrollo";
let strUltimos3 = strB.substring(strB.length - 3);
console.log("Los últimos 3 caracteres son: " + strUltimos3);

// 7- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
let strC = "ingeniería";
let strPrimeraMayuscula = strC.substring(0, 1).toUpperCase() + strC.substring(1).toLowerCase();
console.log("El texto con la primera letra en mayúscula es: " + strPrimeraMayuscula);

// 8- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
let str5 = "bases de datos";
let posicionEspacio = str5.indexOf(" ");
console.log("La posición del primer espacio en blanco es: " + posicionEspacio);

// 9- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
let str6 = "inteligencia artificial";
let espacio = str6.indexOf(" ");
let palabra1 = str6.substring(0, espacio);
let palabra2 = str6.substring(espacio + 1);
let resultado = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase() + " " + palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();
console.log("El resultado con la primera letra de ambas palabras en mayúscula es: " + resultado);