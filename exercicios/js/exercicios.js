//1
function operacoes(x, y) {
    let a = x
    let b = y
    console.log(`
    Soma: ${a+b}
    Subtração: ${a-b}
    Multiplicação: ${a*b}
    Divisão: ${a/b}`)
}

//operacoes(15, 3)

//2
function tipoTriangulo(a, b, c) {
    if(a == b && a == c) {
        console.log("Este é um triângulo equilátero.")
    } else if (a == b || a == c || c ==b) {
        console.log("Este é um triângulo isósceles.")
    } else {
        console.log('Este é um triângulo escaleno.')
    }
}

// tipoTriangulo(3,3,3)
// tipoTriangulo(3,3,4)
// tipoTriangulo(3,4,5)

//3
function expoente(base, expoente) {
    console.log(base ** expoente)
}

// expoente(2,3)
// expoente(5, 2)
// expoente(3,3)

//4
function divisao(dividendo, divisor) {
    console.log(`Resultado: ${dividendo/divisor}, Resto: ${dividendo % divisor}`)
}

// divisao(16, 4)
// divisao(20, 3)

//5
function retornaDinheiro(x) {
    console.log('R$' + x.toFixed(2).replace('.', ","))
}

retornaDinheiro(0.1+0.2)