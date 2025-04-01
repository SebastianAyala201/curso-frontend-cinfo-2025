/*
    Realizar las siguientes tareas:
    - Suma de los diez primeros números naturales.
    - Almacenar los números pares en una lista.
    - Y los impares en otra
    - 1,2,3,4....10 => [2,4,6,8,10]...[1,3,5,7,9]
 */

var suma = 0;
var impares = [];
var pares = [];

for(let i=1;i<11;i++){
    suma = suma + i;
    if(i%2===0){
        pares.push(i);
    }else{
        impares.push(i);
    }
}

console.log(suma)
console.log(impares)
console.log(pares)