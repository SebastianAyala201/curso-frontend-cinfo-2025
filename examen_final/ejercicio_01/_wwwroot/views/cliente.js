$(document).ready(function() {
    $("#guardarBtn").attr("disabled", "disabled");
    $("#mensajeDiv").addClass("oculto");
});

$("#termiChk").on("change", function() {
    let isChecked = $(this).is(":checked");

    if (isChecked) {
        $("#guardarBtn").removeAttr("disabled");
    } else {
        $("#guardarBtn").attr("disabled", "disabled")
    }
});

$("#guardarBtn").on("click", function() {
    // Mostrar el mensaje de confirmación
    $("#mensajeDiv").removeClass("oculto");

    // Después de 3 segundos, redirigir a index.html
    setTimeout(function() {
        window.location.href = "index.html";
    }, 3000); // 3000ms = 3 segundos
});

$("#cancelarBtn").on("click", function() {
    window.location.href = "index.html"; 
});
