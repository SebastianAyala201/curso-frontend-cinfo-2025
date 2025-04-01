"use strict"
//            0      ,       1       ,     2   ,    3
var frutas=["Manzana", "Pera de agua", "Sandia", "Piña"];

console.log("Total elementos:", frutas.length); // Cantidad de elementos

// Agregar arandalos al final
frutas.push("Arándalo");
console.log("frutas.push: ", frutas);

// Leer el segundo elemento
console.log("Segundo elemento:", frutas[1]);

// Convertirlo a texto:
console.log("Convertirlo a texto:", frutas.toString());

// Actualizar el nombre de piña por Piña hawaiana
frutas[3]="Piña hawaiana";
console.log("Nombre de piña por Piña hawaiana: ", frutas);

// Extraer el elemento último (el de arriba en una pila de monedas)
console.info("Extraer el elemento último: ", frutas.pop());
console.info("Queda así la pila: ", frutas);

// Mostrar la moneda que esta encima, sin extraerlo
var pos =frutas.length-1;
console.debug("Mostrar la moneda que esta encima, sin extraerlo:", frutas[pos]);
console.debug("Queda así la pila: ", frutas);

// Extraer y mostrar el primer elemento (como la cola del banco)
console.warn("Extraer y mostrar el primer elemento :", frutas.shift());
console.warn("Queda así la cola: ", frutas);

// Agregar Uva quebranta al inicio
frutas.unshift("Uva quebranta");
console.warn("Queda así el array: ", frutas);

// Recorrer todos los elementos del array, ingresarlo en una lista sin ordenar <ul>
var lista="<ul>";
for(let i=0; i<frutas.length; i++){
    lista=lista+"<li>"+frutas[i]+"</li>";
}
lista=lista+"</ul>";
document.body.innerHTML=lista;
console.error("lista:", lista);