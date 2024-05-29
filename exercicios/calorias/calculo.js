function calcularCalorias() {
    let idade = Number(document.getElementById('idade').value);
    let altura = Number(document.getElementById('altura').value);
    let peso = Number(document.getElementById('peso').value);
    let macho = document.getElementById('macho').checked;
    let femea = document.getElementById('femea').checked;
    let atividades = document.getElementById('atividades').value;

    let calorias;
    if (macho) {
        calorias = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else if (femea) {
        calorias = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }


    let sexo;
    if (document.getElementById('macho').checked) {
        sexo = 'macho';
    } else if (document.getElementById('femea').checked) {
        sexo = 'femea';
    }


    let fatores = {
        'sedentario': 1.2,
        'leve': 1.375,
        'moderado': 1.465,
        'ativo': 1.55,
        'muitoativo': 1.725,
        'extraativo': 1.9
    };

    let caloriasDiarias = calorias * fatores[atividades];
    document.getElementById('resultadofinal').value = caloriasDiarias.toFixed(0) + " kcal";
}

function Limpar() {
    document.getElementById('idade').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('macho').checked = false;
    document.getElementById('femea').checked = false;
    document.getElementById('atividades').selectedIndex = 0;
    document.getElementById('resultadofinal').value = "";
}