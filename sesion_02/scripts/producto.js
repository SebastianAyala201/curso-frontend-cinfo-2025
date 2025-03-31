var producto = {
    CategoriaId: 1,
    Nombre: "Pera de agua",
    Precio: 3.65,
    AplicaIgv: false,
    Igv: 0.8,
    ISC: 0
};
// Actualiza los datos del producto
producto.CategoriaId=2;
producto.Nombre=producto.Nombre+" dulce";
producto.Precio=producto.Precio+0.10;
producto.AplicaIgv=true;
producto.Igv=producto.Igv*1.1;
producto.ISC=null;
// Los muestra en la consola
console.log("producto despues:", producto);
console.warn("producto despues:", producto);
console.error("producto despues:", producto);