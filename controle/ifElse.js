function imprimirResultado(nota) {
    if( nota >= 7 ) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado("10")
imprimirResultado("Nota") // a comparação de string com number vai resultar em FALSE!