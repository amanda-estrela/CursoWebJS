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

//retornaDinheiro(0.1+0.2)

//6
function jurosSimples(capital, juros, tempo) {
    let total = capital + capital * juros * tempo
    console.log(total)
}

//jurosSimples(1200, 0.02, 15)

function jurosCompostos(capital, juros, tempo) {
    let total = capital  * (1 + juros) ** tempo
    console.log(total.toFixed(2).replace('.', ","))
}

//jurosCompostos(5000, 0.01, 6)


//40
function conceito(notas) {
    notas.forEach(element => {
        if(element<=4.9){
            console.log(`${element}: conceito D.`)
        } else if (element<=6.9) {
            console.log(`${element}: conceito C.`)
        } else if(element<=8.9) {
            console.log(`${element}: conceito B.`)
        } else {
            console.log(`${element}: conceito A.`)
        }
        
    });
}

let notas = [3.2, 5.7, 7.2, 9.8]

//conceito(notas)