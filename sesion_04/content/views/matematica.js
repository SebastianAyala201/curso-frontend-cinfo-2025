"use strict";

var numero = 2.54;

var redondeo = Math.round(numero);
var entero = Math.trunc(numero);
var aleatorio = Math.random();
var moneda = parseInt(Math.random()*2);
var dado1 = parseInt(Math.random()*6)+1;
var dado2 = parseInt(Math.random()*6)+1;

console.log("numero: ", numero);
console.log("redondeo: ", redondeo);
console.log("entero: ", entero);
console.log("aleatorio: ", aleatorio);
console.log("moneda: ", moneda);
console.log("dado1 y dado2: ", dado1.toString() + " y " + dado2.toString());