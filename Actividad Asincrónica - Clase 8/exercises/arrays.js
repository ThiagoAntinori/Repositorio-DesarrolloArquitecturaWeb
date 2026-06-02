// 10- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
let arrMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("El mes 5 es: " + arrMeses[4]);
console.log("El mes 11 es: " + arrMeses[10]);

// 11- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)
let arrMesesOrdenados = arrMeses.sort();
console.log("Los meses ordenados alfabéticamente son: " + arrMesesOrdenados);

// 12- Agregar un elemento al principio y al final del array (utilizar unshift y push)
arrMeses.unshift("Mes 0");
arrMeses.push("Mes 13");
console.log("El array de meses después de agregar elementos es: " + arrMeses);

// 13- Quitar un elemento del principio y del final del array (utilizar shift y pop).
arrMeses.shift();
arrMeses.pop();
console.log("El array de meses después de quitar elementos es: " + arrMeses);

// 14- Invertir el orden del array (utilizar reverse)
let mesesReverse = arrMeses.reverse();
console.log("El array de meses invertido es: " + mesesReverse);

// 15- Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
let mesesString = arrMeses.join("-");
console.log("Los meses unidos en un string son: " + mesesString);

// 16- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
let mesesCopia = arrMeses.slice(4, 11);
console.log("La copia del array de meses desde Mayo hasta Noviembre es: " + mesesCopia);