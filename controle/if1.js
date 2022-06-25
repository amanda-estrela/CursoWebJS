function soBoaNoticia(nota) {
    if( nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log(`O valor de ${valor} é true`)
    }
}

seForVerdadeEuFalo(3)
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
seForVerdadeEuFalo({nome: 'Amanda'})


