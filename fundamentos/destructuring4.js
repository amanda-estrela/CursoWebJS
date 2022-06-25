function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const array = [20, 30]
console.log(rand(array))
console.log(rand([50,10]))
console.log(rand([,100]))
console.log(rand([900]))
console.log(rand([]))
//console.log(rand()) gera erro