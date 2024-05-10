function calcularAutonomia() {
    const inputKmPercorridos = document.getElementById('km-percorridos');
    const inputCombustivelAtual = document.getElementById('combustivel-atual');
    const resultado = document.getElementById('resultado');

    const kmPercorridos = Number(inputKmPercorridos.value);
    const combustivelAtual = Number(inputCombustivelAtual.value);


    const autonomia = kmPercorridos / combustivelAtual;

    resultado.textContent = `A autonomia do veículo é de aproximadamente ${autonomia.toFixed(2)} litros por quilômetro.`;
}
