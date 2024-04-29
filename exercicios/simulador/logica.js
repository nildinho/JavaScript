/**
 * JS - simulador de operadores lógicos
 * @author Vanildo Lima
 */

 //valor recebido
 // 1 acender lâmpada
 // 2 apagar a lâmpada
 // 3 quebrar a lâmpada
 let valor

let quebrada = false //estado da lâmpada

function simular(valor){
    
    //quebrar a lâmpada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src="./img/broken.jpg"
        quebrada = true
    }
}