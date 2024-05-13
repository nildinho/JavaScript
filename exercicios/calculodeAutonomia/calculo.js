function calcularAutonomia() {
    let KmRodados = document.getElementById('km-percorridos')
    let inputCombustivelAtual = document.getElementById('combustivel-atual')
    let resultado = document.getElementById('resultado')

    let kmPercorridos = Number(KmRodados.value)
    let combustivelAtual = Number(inputCombustivelAtual.value)


    let autonomia = (kmPercorridos / combustivelAtual) 

    resultado.textContent = `A autonomia do veículo é de aproximadamente ${autonomia.toFixed(2)} Quilometros por litro.`
}
