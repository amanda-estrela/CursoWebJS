//Factory simples
function criarPessoa(nome, sobrenome) {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

/*
desafio

function criarPessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa('Ana', 'Silva'))
*/