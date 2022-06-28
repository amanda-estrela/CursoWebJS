//pessoa -> endereço de memoria 123 -> objeto { ...}  == indica o local na memoria, não os dados contidos no objeto
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: "Ana"}

Object.freeze(pessoa) //congela o objeto em questão

pessoa.nome = 'Max'
console.log(pessoa.nome)// retorna Pedro, ignora comando dps do freeze

const pessoaConstante = Object.freeze({nome: "João"}) //já cria bloqueando alterações
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome) // Joao