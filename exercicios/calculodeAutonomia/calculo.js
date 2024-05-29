/**
 * calculadora autonomia de carro
 * @author Vanildo Lima
 * 
 */

let capacidade, tanque 
function calcularAutonomia() {
    var capacidadeTanque = parseFloat(document.getElementById('capacidadeTanque').value);
    var consumoMedio = parseFloat(document.getElementById('consumoMedio').value);

    if (isNaN(capacidadeTanque) || isNaN(consumoMedio)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    var autonomia = capacidadeTanque * consumoMedio;
    document.getElementById('resultado').innerHTML = "Autonomia: " + autonomia.toFixed(2) + " km";
}

function limparCampos() {
    document.getElementById('capacidadeTanque').value = "";
    document.getElementById('consumoMedio').value = "";
    document.getElementById('resultado').innerHTML = "";
}
