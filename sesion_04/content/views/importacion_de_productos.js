"use strict";

document.getElementById("guardarBtn").addEventListener("click", function () {
    let prov = document.getElementById("proveedorTxt").value;
    let ruc = document.getElementById("rucTxt").value;
    let mon = document.getElementById("monpagoSel").value;
    let ver = document.getElementById("sunatChk").checked;

    console.log("Nombre de proveedor: ", prov);
    console.log("RUC: ", ruc);
    console.log("Moneda de pago: ", mon);

    localStorage.setItem("Nombre de proveedor: ", prov);
    localStorage.setItem("RUC: ", ruc);
    localStorage.setItem("Moneda de pago: ", mon);
});

