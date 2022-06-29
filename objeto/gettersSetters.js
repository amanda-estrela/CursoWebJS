//get lê o valor
//set altera uma variável

const sequencia = {
    _valor: 1, // convenção para variável que pretende ser usada apenas internamente
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor)
        this._valor = valor 
    }

}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // vai desconsiderar, devido a validação do set
console.log(sequencia.valor, sequencia.valor)