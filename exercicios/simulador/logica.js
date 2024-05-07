/**
 * JS - simulador de operadores lógicos
 * @author Vanildo Lima
 */

//valor recebido
// 1 acender lâmpada
// 2 apagar a lâmpada
// 3 quebrar a lâmpada
let valor

//estado da lâmpada
let quebrada = false

//chave
let sw1 = false
let sw2 = false

let path = window.location.pathname // obter o localização da pagina
function simular(valor) {
    //chaves
    if (valor === 1 && sw1 === false) {
        document.getElementById("sw1").src = "img/swon.png"
        sw1 = true
    } else if (valor === 1 && sw1 === true) {
        document.getElementById("sw1").src = "img/swoff.png"
        sw1 = false
    }
    if (valor === 2 && sw2 === false) {
        document.getElementById("sw2").src = "img/swon.png"
        sw2 = true
    } else if (valor === 2 && sw2 === true) {
        document.getElementById("sw2").src = "img/swoff.png"
        sw2 = false
    }

    //quebrar a lâmpada
    if (valor === 3) {
        let beep = new Audio()
        beep.src = "./sound/glassbreaking.wav"
        beep.play()
        document.getElementById("lamp").src = "./img/broken.jpg"
        quebrada = true
    }
    // AND
    if (quebrada === false && path === "/exercicios/simulador/and.html") {
        if (sw1 === true && sw2 === true) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"

        }
    }
    // OR
    if (quebrada === false && path === "/exercicios/simulador/or.html") {
        if (sw1 === true || sw2 === true) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"

        }

    }


    // NOT
    if (quebrada === false && path === "/exercicios/simulador/not.html") {
        if (!sw1) {
            document.getElementById("lamp").src = "./img/on.jpg"
        } else {
            document.getElementById("lamp").src = "./img/off.jpg"

        }

    }
}
