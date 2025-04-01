"use strict";

var mensaje = "Bienvenidos al curso, Unidad: JavaScript";

var mayusculas = mensaje.toUpperCase();
var minusculas = mensaje.toLowerCase();
var replace = mensaje.replace("Unidad", "Capítulo");
var replaceAll = mensaje.replaceAll(" ", "-");

var textoConMuchosEspacios = "      Unidad: JavaScript     ";
var trim = textoConMuchosEspacios.trim();

// Un sistema genera los números de factura. Para impresión se pide de 6 digitos, completar con '0'
// 123=>000123
var nro = "01";
var factura = nro.padStart(4, "0");

// Un sistema lee los nombres del alumno y los registra en una ficha, si tiene menos de 12 caracteres
// los completa con '-'.
// 'Juan Luis' =>'Juan Luis---'
var alumno = "Juan Luis";
var ficha = alumno.padEnd(12, "-");

// A través de un servicio SOAP, se recibe cadenas de texto con nombre de productos
// Convertirlo a array:  "Pera, Manzana, Piña, Durazno"
var frutaTexto = "Pera, Manzana, Piña, Durazno";
var frutaArray = frutaTexto.split(", ");

// Indicar el número de caracteres del mensaje de bienvenida
var length = mensaje.length;

// Se tiene el número de una factura, se pide obtener la serie. La serie es de 4 caracteres
// F001-000546 => F001
var factu="F001-000546";
var serie=factu.substring(0,4);

var text="Sopa de fideos";
var part1 = text.substring(4,9);
var part2 = text.substr(4,4);

console.log("mayusculas: ", mayusculas);
console.log("minusculas: ", minusculas);
console.log("replace: ", replace);
console.log("replaceAll: ", replaceAll);
console.log("trim: ", trim);
console.log("factura: ", factura);
console.log("ficha: ", ficha);
console.log("frutaArray: ", frutaArray);
console.log("length: ", length);
console.log("serie: ", serie);
console.log("part1: ",part1)
console.log("part2: ",part2)