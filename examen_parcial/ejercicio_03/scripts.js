document.addEventListener("DOMContentLoaded", function () {
    const tipoDocumentoRadios = document.querySelectorAll("input[name='TipDocumento']");
    const labelDocumento = document.getElementById("labelDocumento");
    const documentoTxt = document.getElementById("documentoTxt");
    const aceptarBtn = document.getElementById("aceptarBtn");
    const terminosChk = document.getElementById("terminosChk");
    const cancelarBtn = document.getElementById("cancelarBtn");
    
    tipoDocumentoRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "DNI") {
                labelDocumento.textContent = "Ingrese DNI";
            } else if (this.value === "Pasaporte") {
                labelDocumento.textContent = "Ingrese No de Pasaporte";
            } else if (this.value === "CE") {
                labelDocumento.textContent = "Ingrese CE";
            }
        });
    });
    
    terminosChk.addEventListener("change", function () {
        aceptarBtn.disabled = !this.checked;
    });
    
    cancelarBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
