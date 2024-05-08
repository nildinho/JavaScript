/**
 * Estudo das funções usando a sintaxe moderna da linguagem
 * @author Vanildo Lima
 * @link https://github.com/nildinho.com.br
 */

console.clear()

//Função Simples (literal)
function hello() {
    console.log("Hello Function")
}
hello()
console.log(typeof hello)

// Função anônima (atribuída)
const hello2 = function () {
    console.log("hello function assigned")
}
hello2()
console.log(typeof hello2)

// Função anônima simplificada (Arrow function)
const hello3 = () => {
    console.log("hello arrow function assigned")
}

hello3()
console.log(typeof hello3)

// Função anônima super simplificada (Arrow function)
const hello4 = _=> console.log("hello arrow function assigned simplified")
hello4()
console.log(typeof hello4)

// Funções simples om retorno
function somarS(num1, num2) {
    return console.log(num1 + num2)
}

somarS(2, 3)
console.log(typeof somarS)

// Funções anônima com retorno
let somarA = function(num1, num2) {
    return console.log(num1 + num2)
}

somarA(2, 3)
console.log(typeof somarA)

// Funções anônima simplificad (Arrow function) com retorno
let somarAF = (num1, num2) => {
    return console.log(num1 + num2)
}

somarAF(2, 3)
console.log(typeof somarAF)

// Funções anônima super simplificada (Arrow function) com retorno
let somarAFS = (num1, num2) => console.log(num1 = num2)

somarAFS(2, 3)
console.log(typeof somarAFS)