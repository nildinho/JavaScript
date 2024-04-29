/**
 * Regra de 3
 */
// importação de pacote
const read = require('readline-sync')

// declaração de variáveis
let x,y, valor

console.clear()
console.log("Regra de 3")
console.log("x% de Y = valor")

// entrada de dados
x = read.question("digite o valor de x: ")
y = read.question("digite o valor de y: ")

//processamento
valor = (x * y) / 100

// saida
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)