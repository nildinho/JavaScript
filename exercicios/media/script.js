function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('primeiranota').value);
    let nota2 = parseFloat(document.getElementById('segundanota').value);
    let nota3 = parseFloat(document.getElementById('terceiranota').value);
    let nota4 = parseFloat(document.getElementById('quartanota').value);

    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media < 4) {
        document.getElementById('resultado').textContent = "Reprovado - Média: " + media.toFixed(2);
    } else if (media >= 4 && media < 7) {
        document.getElementById('resultado').textContent = "Recuperação - Média: " + media.toFixed(2);
    } else {
        document.getElementById('resultado').textContent = "Aprovado - Média: " + media.toFixed(2);
    }
}