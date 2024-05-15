/**
 * Estrutura de dados
 * Objetos
 * @author Vanildo Lima
 */

const funcionario1 = {}
console.log(typeof funcionario1)
//adicionar dados a estrutura (CRUD Create)
funcionario1.nome = "Lucas"
funcionario1.cargo = "atendente"
funcionario1.email = "lucas1100@gmail.com"
funcionario1.salario = "2000"
funcionario1.insta = "@lucasz"
//listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estrutura (CRUD Update)
funcionario1.nome = "Lucas Lima"
console.log(funcionario1)
//excluir dados da estrutura (CRUD Delete)
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    Nome: "Tobey Maguire",
    cargo: "Ator",
    email:"tobeymaguire@gmail.com",
    salario: 150000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Teias",
    cidade: "Forest Hills",
    estado:"Nova York"
}

console.log(endereco1)

const funcionario3 = {
    Nome: "Alfred Pennywort",
    cargo: "mordomo",
    email:"alfred@gmail.com",
    salario: 20000,
    ...endereco1 //... spread operator (uniao de 2 estruturas)
}
console.log(funcionario3)

const funcionario4 = {
    Nome: "Dick Grayson",
    cargo: "acrobata",
    email:"robin@gmail.com",
    salario: 2000,
    ...endereco1 //... spread operator (uniao de 2 estruturas)
}
console.log(funcionario4)

const funcionario5 = {
    nome:"Minato",
    cargo: "hokage",
    email: "minato@gmail.com",
    salario:5000,
    kunai: {
        versao:"Hokage",
        ano:2004
    },
    suitUp: () => {
        console.log("⚡")
    }

}
console.log(funcionario5)
console.log(funcionario5.kunai.versao)
funcionario5.suitUp() //executar a função interna da estrutura