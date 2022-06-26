const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for( let i in notas) {  //não precisa usar o LET, mas é melhor para garantir o escopo
    console.log(`${i} - ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) { //não precisa usar o LET, mas é melhor para garantir o escopo
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log