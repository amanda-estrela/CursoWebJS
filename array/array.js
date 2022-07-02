console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //retorna undefined

aprovados[3] = 'Max' // método melhor usado para substituir elementos
aprovados.push('Abia') // add elemento no final
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort() // altera o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1]) // undefined
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1) // indice inicial, depois quantos elementos excluir. no final pode colocar novos elementos
console.log(aprovados)