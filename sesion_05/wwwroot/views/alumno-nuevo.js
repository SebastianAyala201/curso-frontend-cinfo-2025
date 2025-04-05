"use strict";

$("#GuardarButton").on("click", function () {
    // Supongamos que lo leimos de un Api Rest
    let alumno = {
        codigo: "00112233",
        nombre: "Maria Garcia",
        provincia: "Lima",
        distrito: "Breña",
        tipodocumento: "DNI",
        numerodocumento: "44556677"
    };

    $("#codigo").val(alumno.codigo);
    $("#provincia").val(alumno.provincia);
    $("#distrito").val(alumno.distrito);

    $("#nombre").data("alumno-nombre", alumno.nombre);
    let alumno_nombre = $("#nombre").data("alumno-nombre");
    alert(alumno_nombre);

    $("#codigo").val(alumno.codigo);

    $("#tipodocumento").val(alumno.tipodocumento);
    $("#numerodocumento").val(alumno.numerodocumento);
    let numerodocumento = $("#numerodocumento").val();
    alert(numerodocumento);
});
