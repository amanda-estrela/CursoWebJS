/*
 atribuição por valor é, em geral, para tipo de dados primitivos.

atribuição por referencia é para os demais dados, como objetos, funções => neste caso, a variável é um endereço de memoria compartilhado 
*/
const a = {
    name: 'Teste'
}
 console.log(a)

 const b = a

 b.name = 'Texto'

 console.log(a) // a recebe a mudança, porque a e b indicam o mesmo espaço de memoria


let valor // não inicializada
console.log(valor) // undefined = valor indefinido

valor = null // definido que não tem nenhum valor, não aponta para nenhum lugar de memória
console.log(valor)
//console.log(valor.toString()) gera erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // false
//delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // false
console.log(produto)

