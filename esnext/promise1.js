//console.log(typeof Promise) //function
//console.log(typeof p) //object

const primeiroElemento = arrayOuString=> arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana', 'Bia',  'Carlos'])
})
    .then(primeiroElemento) //primeiro item do array
    .then(primeiroElemento) //primeira letra da string
    .then(letraMinuscula)
    .then(console.log)

