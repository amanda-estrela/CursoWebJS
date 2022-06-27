function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
} 

const pessoa = new Pessoa('Max')
pessoa.falar()