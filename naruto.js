/**
 * Sorteio de uma carta
 * Exemplo de uso do array para simplicar o código
 * @author Vanildo Lima & João Victor S.
 */

function sortearCarta() {
    //              [0] [1] [2] [3] 
    let elemento = ["Fogo", "Agua", "Terra", "Raio","Vento","kekkei genkai"]
    //           [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11][12] 
    let ninja = ["Naruto", "Sasuke", "Tobirama","Onooki","Kakashi",
 "Hashirama"]

    //sorteio do índice dos vetores
    let elementos = elemento[Math.floor(Math.random() * 6)] //(0 - 5)
    let ninjas = ninja[Math.floor(Math.random() * 6)] //(0 - 5)
    //console.log(`${face}${nipe}`)

    //Determinar a cor com base no naipe sorteado antes de exibira a carta
    let imagem
    if (elementos === 'Fogo') {
        document.getElementById('supDir').innerHTML = `<img src="./img/fogo.png">`
    } else if (elementos === 'Agua') {
        document.getElementById('supDir').innerHTML = `<img src="./img/agua.jpg">`
    }  else if  (elementos === 'Terra') {
        document.getElementById('supDir').innerHTML = `<img src="./img/terra.png">`
    }  else if(elementos === 'Raio') {
        document.getElementById('supDir').innerHTML = `<img src="./img/relampago.png">`
    } else if (elementos === 'Vento') {
        document.getElementById('supDir').innerHTML = `<img src="./img/vento.png">`
    }  else  {
        document.getElementById('supDir').innerHTML = `<img src="./img/mokuton.jpg">`
    }
    //Renderizar(desenhar, exibir, "dar vida") a carta

    //atualizar o centro da carta  
    if (ninjas === 'Naruto') {
        document.getElementById('centro').innerHTML = `<img src="./img/naruto.jpg">`
        document.getElementById('supDir').innerHTML = `<img src="./img/vento.png">`
    
    } else if (ninjas === 'Sasuke') {
        document.getElementById('centro').innerHTML = `<img src="./img/sasuke.jpg">`
        document.getElementById('supDir').innerHTML = `<img src="./img/fogo.png">`
        document.getElementById('poderes').innerHTML = "Poderes: Rasengan, Clones das Sombras"
    } else if (ninjas === 'Tobirama') {
        document.getElementById('centro').innerHTML = `<img src="./img/tobirama.jpg">`
        document.getElementById('supDir').innerHTML = `<img src="./img/agua.jpg">`
        document.getElementById('poderes').innerHTML = "Poderes: Domínio da Água, Técnica de Invocação de Técnica de Suporte,"
    } else if (ninjas === 'Onooki') {
        document.getElementById('centro').innerHTML = `<img src="./img/onooki.jpg">`  
        document.getElementById('supDir').innerHTML = `<img src="./img/terra.png">`
    } else if (ninjas === 'Kakashi') {
        document.getElementById('centro').innerHTML = `<img src="./img/kakashi.jpg">`
        document.getElementById('supDir').innerHTML = `<img src="./img/relampago.png">`
    } else if (ninjas === 'Hashirama'){
        document.getElementById('centro').innerHTML = `<img src="./img/hashirama.png">`
        document.getElementById('supDir').innerHTML = `<img src="./img/mokuton.jpg">`   
    } else  {        
        document.getElementById('centro').innerHTML = `${ninjas}`
        document.getElementById('poderes').textContent = `${ninjas}`
        document.getElementById('centro').style.color = cor /*adicionar css*/
    }
}
