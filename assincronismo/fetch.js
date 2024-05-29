/**
 * assincronismo
 * Fetch (promise simplificada)
 * @author Vanildo Lima
 */

const read = require('readline-sync')
console.clear()
console.log("VIA CEP")
let cep  = read.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json`
// apoio ao entedimento da lógica
// console.log(urlAPI)
// uso de promise para recuperar dados do WEB SERVICE(api)
fetch(urlAPI)
.then(()=>{ // para obter os dados 
    return response.json()
})
.then(()=> { // manipluar os dados obtidos
    console.log(dados.logradouro)
    console.log(dados.bairro)
    console.log(dados.localidade)
    console.log(dados.uf)

})
.catch((error)=> {
    console.log(`erro ao obter o endereço: ${error} `)
})
