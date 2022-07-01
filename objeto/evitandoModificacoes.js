//object.preventExtensions => pode excluir, mas nao adicionar atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99, 
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' //pode alterar
produto.descricao = 'Borracha escolar branca' //não pode criar novos atributos
delete produto.tag //pode remover
console.log(produto)


//Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) //não adiciona nem exclui, apenas altera
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes, não aceita alterações nos atributos

