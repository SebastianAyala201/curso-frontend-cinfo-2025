"use strict";

$("#nombre").on("input", function () {
    let nombre = $(this).val();
    let maxlength = $("#nombre-corto").attr("maxlength");
    let nombreCorto = nombre.substr(0, maxlength);

    $("#nombre-corto").val(nombreCorto);
});
