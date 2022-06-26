function soma() {
    let resultado = 0
    for(i in arguments) {
        resultado += arguments[i]
    }
    return resultado
}

console.log(soma())
console.log(soma(5))
console.log(soma(12,23))
console.log(soma(7,8,9))
console.log(soma(7, 8, 'teste'))
console.log(soma('a', 'b', 'c'))
