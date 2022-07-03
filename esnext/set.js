//não aceita repetição e não é indexada
const times = new Set()
times.add('Cruzeiro')
times.add('Grêmio').add('Internacional').add('São Paulo')
times.add('Fluminense')
times.add('Cruzeiro')

console.log(times)
console.log(times.size)
console.log(times.has('cruzeiro'))
console.log(times.has('Cruzeiro'))
times.delete('Fluminense')
console.log(times.has('Fluminense'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)