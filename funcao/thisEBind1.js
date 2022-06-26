const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const pFalar = pessoa.falar
pFalar() // undefined pq há conflito entre paradigmas funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()