function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao // no caso de Do/While, pode se iniciar apenas com a declaração da variável, sem atribuir valor

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while ( opcao != -1 ) 

console.log('Até a próxima!')