$(document).ready(function(){
    $("#GuardarBtn").attr("disabled","disabled");
    $("#MensajeDiv").addClass("oculto");

});

$("#TerminoChk").on("change",function(){
    let isChecked = $(this).is(":checked");

    if(isChecked){
        $("#GuardarBtn").removeAttr("disabled");
    }
    else{
        $("#GuardarBtn").attr("disabled","disabled")
    }
})

$("#GuardarBtn").on("click", function(){
    $("#MensajeDiv").removeClass("oculto");
})