let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {   // se so tem um parametro, pode dispensar os parenteses
    return 2 * a
}

dobro = a => 2 * a   // quando nao tem as chaves, é ndicativo de que é para retornar o resultado(return implicito)

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um parametro(que vc pode ignorar)
console.log(ola())