"use strict";

var carta1;
var carta2;

function fnCarta() {
    let carta = parseInt(Math.random() * 10) + 1;

    return carta;
}

carta1 = fnCarta();
carta2 = fnCarta();

document.getElementById("carta-1").innerHTML = carta1.toString();
document.getElementById("carta-2").innerHTML = carta2.toString();

//////////////////////////////////////////////////////
function fnCartaById(id) {
    let carta = parseInt(Math.random() * 10) + 1;

    document.getElementById(id).innerHTML=carta.toString();
}

// Si no se pone parentesis, las funciones se comportan como objetos
// setInterval ejecuta la función pasandoles sus parametros que estan
// despues del intervalo.
setInterval(fnCartaById, 800, "carta-11");
setInterval(fnCartaById, 800, "carta-22");