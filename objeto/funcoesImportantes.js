 const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
 }

 console.log(Object.keys(pessoa))  //chaves
 console.log(Object.values(pessoa)) // valores
 console.log(Object.entries(pessoa)) //um array de arrays, em q cada elemento é composto pelo par chave/valor

 Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
 })

 //ou, com destructuring
 Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
 })

 Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //mostra a chave se solicitado
    writable: false, //valor nao poderá ser alterado
    value: '01/01/2019'
 })

 pessoa.dataNascimento = '01/01/2017'
 console.log(pessoa.dataNascimento)
 console.log(Object.keys(pessoa))

 //ecma 2015
 const dest = { a: 1 }
 const o1 = { b: 2 }
 const o2 = { c:3,  a: 4 }
 const obj = Object.assign(dest, o1, o2) // { a: 4, b: 2, c: 3 }
 console.log(obj)

 Object.freeze(obj)
 obj.c = 1234
 console.log(obj)