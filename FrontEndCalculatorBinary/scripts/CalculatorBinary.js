//@Author: Luiz Felipe
//@GitHub: https://github.com/LuizxxDev/FrontEnd/blob/main/FrontEndCalculatorBinary/scripts/CalculatorBinary.js

const DIVIDER = 2;

let currentFunction = convertForBinary;

function toggleFunction(){
    var messageInput = document.getElementById("message-input");
    var inputElement = document.getElementById("Input").value = " ";
    var resultadoElement = document.getElementById("resultado");
    var titleElement = document.getElementById("title-calculator");
    
    currentFunction = (currentFunction === convertForBinary) ? BinaryForDecimal : convertForBinary;
    
    resultadoElement.textContent = "";

    titleElement.textContent = (currentFunction === convertForBinary) ? "Decimal For Binary" : "Binary For Decimal";

    messageInput.textContent = (currentFunction === convertForBinary) ? "DIGITE UM NUMERO DECIMAL" : "DIGITE UM NUMERO BINARIO";

}

function convertForBinary(){
    var decimalInput = document.getElementById("Input").value;
    var resultadoElement = document.getElementById("resultado");
    if(isNaN(decimalInput) || decimalInput === ""){
        showAlert("insira um número decimal válido");
    }

    var binary = "";

    while (decimalInput > 0) {
        let rest = decimalInput % DIVIDER;
        binary = rest + binary;
        decimalInput = Math.floor(decimalInput / DIVIDER);
    }
    resultadoElement.textContent = binary.toString();
}

function BinaryForDecimal(){
    
    var decimalInput = document.getElementById("Input").value;
    var resultadoElement = document.getElementById("resultado");

    if(isNaN(decimalInput)){
        alert("Por favor, insira um numero binario valido");
    }
    debugger;

    var arrayBinary = decimalInput.split('');
    var result = 0;

    for(let i = arrayBinary.length - 1; i >= 0; i--){
        result += parseInt(arrayBinary[i] * Math.pow(2, arrayBinary.length - 1 - i))
        resultadoElement.textContent = result.toString();
    }
}

function limpar(){
    var inputElement = document.getElementById("Input").value = " ";
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = " ";
    
}

function performConversion() {
    currentFunction();
}

