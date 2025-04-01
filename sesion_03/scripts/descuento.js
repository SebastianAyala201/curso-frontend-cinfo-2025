/*
Por campaña escolar, se ofrece un descuento de
 20%, si la venta es mayor a S/ 50, y 30%,
si es mayor a 100.
Debe incluir el nombre del cliente.
|   40   |  80     | 200
___________________
0       50     100
    0%      20%      30%
*/
// Sol:
 
var compra = {
    nombre: null,
    monto: null,
    descuento: 0,
    montoNeto: 0,
};

compra.nombre = "María Sanchez";
compra.monto = 130;

if(compra.monto<=50){
    compra.montoNeto=compra.monto;
} else{
    if(compra.monto <=100){
        compra.montoNeto = compra.monto * 0.8;
    }else{
        compra.montoNeto = compra.monto * 0.7;
    }
}

alert("El monto a pagar es: "+ compra.montoNeto)
console.info("Cliente:", compra.nombre);