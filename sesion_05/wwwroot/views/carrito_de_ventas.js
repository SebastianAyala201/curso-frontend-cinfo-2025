"use strict";

$("input[name='moneda']").on("click", function () {
    if ($("#sol-radio").is(":checked")) {
        $("#monto-label").html("Monto S/");
    } else if ($("#dolar-radio").is(":checked")) {
        $("#monto-label").html("Monto $");
    } else if ($("#euros-radio").is(":checked")) {
        $("#monto-label").html("Monto €");
    }
});
