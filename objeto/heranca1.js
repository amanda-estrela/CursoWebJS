const ferrari = {
    modelo: 'F40',
    velocidadeMax: 324
}

const volvo = {
    modelo: 'V40',
    velocidadeMax: 200
}

console.log(ferrari.__proto__) // quem é o prototipo, o elemento pai. Aqui, um objeto vazio
console.log(ferrari.__proto__ === Object.prototype) // true.
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)// null

function meuObjeto () {}
console.log(typeof Object, typeof meuObjeto) // função função
console.log(Object.prototype, meuObjeto.prototype) //objetos vazios

//Só funções tem o método .prototype


