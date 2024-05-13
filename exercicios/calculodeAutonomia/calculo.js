function calcularAutonomia() {
    let inputKmPercorridos = document.getElementById('km-percorridos');
    let inputCombustivelAtual = document.getElementById('combustivel-atual');
    let Resultado = document.getElementById('resultado');
    let Consumo = document.getElementById('consumo');

    let kmPercorridos = Number(inputKmPercorridos.value);
    let combustivelAtual = Number(inputCombustivelAtual.value);

    let autonomia = kmPercorridos / combustivelAtual;
    let consumo = combustivelAtual / kmPercorridos;

    Resultado.textContent = `A autonomia do veículo é de aproximadamente ${autonomia.toFixed(2)} Km/l`;
    Consumo.textContent = `O veículo gasta aproximadamente ${consumo.toFixed(2)} litros por quilômetro.`;
}
