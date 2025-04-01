"use strict";

// Dar formato al número con 2 decimales.
// Dar formato al número con 4 decimales.
var numero=1234.56789;
var num2dec=numero.toFixed(2); // toFixed(): Da formato con redondeo.
var num4dec=numero.toFixed(4);

console.warn("num2dec: ", num2dec);
console.warn("num4dec: ", num4dec);

// Convertir el texto numérico a número: "123.45678" (esta con comillas)
var flotante = parseFloat("123.45678");

// Convertir el texto numérico a entero "123.45678"
var entero = parseInt("123.45678");// parseInt(): Realiza truncamiento a la parte decimal

console.warn("flotante: ", flotante);
console.warn("entero: ", entero);

// Indicar si los valores son enteros o no: 123.45678, 123
var esEntero1=Number.isInteger(123.45678);
var esEntero2=Number.isInteger(123);

console.info("Verificar si son enteros: ", esEntero1, esEntero2);
