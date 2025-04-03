"use strict";

document.getElementById("guardarBtn").addEventListener("click", function () {
    let prov = document.getElementById("proveedorTxt").value;
    let ruc = document.getElementById("rucTxt").value;
    let mon = document.getElementById("monpagoSel").value;
    let ver = document.getElementById("sunatChk").checked;

    console.log("Nombre de proveedor: ", prov);
    console.log("RUC: ", ruc);
    console.log("Moneda de pago: ", mon);

    //Guardar datos
    localStorage.setItem("nomProv", prov);
    localStorage.setItem("ruc", ruc);
    localStorage.setItem("monPago", mon);

    //Obtener datos
    let nombreLocalStorage = localStorage.getItem("nomProv");
    //Pasar local storage a alert
    alert("Nombre Local Storage: "+ nombreLocalStorage)

    //Obtener datos
    let rucLocalStorage = localStorage.getItem("ruc");
    //Pasar local storage a Html
    document.getElementById("message").innerText += "\n" + rucLocalStorage;

    // Eliminar Ruc desde localStorage
    localStorage.removeItem("ruc");
    alert("ruc eliminado: " + localStorage.getItem("ruc"));
});

document.getElementById("retornarBtn").addEventListener("click", function () {
    document.getElementById("MensajesDiv").innerHTML = "<strong>Retornando a inicio</strong>";

    setTimeout(function () {
        window.location.href = "index.html";// Realiza la redirección
    }, 3000);// Espera el valor, expresado en milisegundos, luego ejecuta el código de la función anónima.
});

window.addEventListener("load",function(){
    alert("Cargando pagina...")
})
