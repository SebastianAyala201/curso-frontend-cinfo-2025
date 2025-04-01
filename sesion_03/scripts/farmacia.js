/*
    En una farmacia, si el producto es categoría
     1, es antibiótico y debe pedir receta.
    Si es categoría 2,3 debe pedir receta 
    archivada.
    Sino es venta libre.
*/

var producto = {
    nombre: "pastilla A",
    categoria: null,
};

producto.categoria = 6;

if(producto.categoria == 1){
    console.log("El producto es antibiótico")
    console.log("Usted debe pedir receta");
} else if(producto.categoria == 2 || producto.categoria == 3){
    console.warn("Usted debe pedir receta archivada");
}else{
    console.error("Venta libre")
}

