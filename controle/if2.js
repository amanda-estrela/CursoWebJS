function teste1(valor) {
    if( valor > 7 ) // se não usar as chaves, o IF só considera a primeira sentença como dependente de sua condicional
        console.log(valor)
        console.log('Fim teste 1')
}

function teste2(valor) {
    if( valor > 7); {    //esse ';' é considerado como o fim de uma sentença vazia, e o bloco de código seguinte já estaria fora do IF
        console.log(valor)
    }
}

teste1(8)
teste1(6)
teste2(8)
teste2(6)
