function calcularAutonomia() {
    const capacidadeTanque = parseFloat(document.getElementById('tank-capacity').value);
    const consumoMedio = parseFloat(document.getElementById('fuel-consumption').value);
    const quantidadeCombustivel = parseFloat(document.getElementById('current-fuel').value);

    if (isNaN(capacidadeTanque) || isNaN(consumoMedio) || isNaN(quantidadeCombustivel)) {
        document.getElementById('result').textContent = 'Por favor, preencha todos os campos com valores numéricos válidos.';
        return;
    }

    const autonomia = (quantidadeCombustivel * consumoMedio).toFixed(2);
    document.getElementById('result').textContent = `A autonomia do veículo é de aproximadamente ${autonomia} km.`;
}
