let comparaComThis = function(param) {
    console.log( this === param)  // aqui vai se referir ao escopo global
}

comparaComThis(global) // global no Node; se for executar no browser, seria 'window'

const obj = {}
comparaComThis = comparaComThis.bind(obj) // adicionou como um método do objeto, e com o bind o this passa a se referir ao objeto
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)  // aqui é false, pq referencia o modulo
comparaComThisArrow(module.exports) // = this

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false, a arrow function tem mais força q o bind
comparaComThisArrow(module.exports) // true