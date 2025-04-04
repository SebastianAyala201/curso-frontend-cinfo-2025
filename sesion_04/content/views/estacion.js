"use strict";

function fnEstacion(nro){
    if(nro===1){
        return("Verano");
    }else if(nro===2){
        return("Otoño");
    }else if(nro===3){
        return("Primavera");
    }else if(nro===4){
        return("Invierno");
    }else{
        return null;
    }
}

$("#estacion").on("input",function(){
    let estacionNro = parseInt($("#estacion").val());
    let nombre = fnEstacion(estacionNro);
    alert(nombre);
})