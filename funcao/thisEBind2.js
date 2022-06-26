function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa

/* Ou essa opção que é um atificio
function Pessoa() {
    this.idade = 0

    const self = this   ----declarar o this como uma constante
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa

*/