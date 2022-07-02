Array.prototype.forEach2 = function(dados){
    for(let i = 0; i < this.length; i++) {
        dados(this[i], i, this)
    }
}

const aprovados = ['Amanda', 'Ana', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
})