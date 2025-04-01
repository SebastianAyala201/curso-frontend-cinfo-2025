"use strict";

document.getElementById("SumBtn").addEventListener("click",function(){
    let num1 = document.getElementById("num1Txt").value;
    let num2 = document.getElementById("num2Txt").value;
    let result = parseInt(num1) + parseInt(num2) ;

    document.getElementById("ResultTxt").value = result.toString();
});

document.getElementById("ResBtn").addEventListener("click",function(){
    let num1 = document.getElementById("num1Txt").value;
    let num2 = document.getElementById("num2Txt").value;
    let result = parseInt(num1) - parseInt(num2) ;

    document.getElementById("ResultTxt").value = result.toString();
});

$("#MulBtn").on("click",function (){
    let num1 = $("#num1Txt").val();
    let num2 = $("#num2Txt").val();
    let result = parseFloat(num1) * parseFloat(num2);

    $("#ResultTxt").val(result.toString());
});

$("#DivBtn").on("click",function (){
    let num1 = $("#num1Txt").val();
    let num2 = $("#num2Txt").val();
    let result = parseFloat(num1) / parseFloat(num2);

    $("#ResultTxt").val(result.toString());
});