function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min:10, max:100}
console.log(rand(obj))
console.log(rand({min: 200, max:500}))
console.log(rand({}))
//console.log(rand()) gera erro