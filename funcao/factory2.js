function criarProduto(produto, preco) {
    return {
        produto,
        preco,
        desconto: 0.2
    }
}

console.log(criarProduto('caderno', 21))
console.log(criarProduto('agenda', 18))