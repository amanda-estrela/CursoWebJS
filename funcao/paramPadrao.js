//1 forma = nao gera um resultado preciso de o valor for 0

function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(0,0,0)) /// cosidera 0 como null, então atribui valor 1

console.log(soma(2,2,2))
console.log(soma(3))
console.log(soma())


//2 3 e 4 formas de atribuir paramero padrao
function soma2(a, b, c) {
    a = a != undefined ? a : 1 //usar operador ternario
    b = 1 in arguments ? b :1 // 1 é o indice no array de parametros
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))


//valor padrao do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1,2,3))
console.log(soma3(0,0,0))