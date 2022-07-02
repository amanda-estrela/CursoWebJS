const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Hamilton']
pilotos.pop() //remove o último elemento
console.log(pilotos)

pilotos.push('Verstappen') //inclui na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //inclui na primeira posição
console.log(pilotos)

//splic pode adicionar e remover

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Russel')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //slice gera novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //primeiro e ultimo indice(o ultimo nao entra)
console.log(algunsPilotos2)