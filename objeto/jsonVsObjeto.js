const obj = {a: 1, b: 2, c: 3, soma () { return a + b + c} }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))

// em JSON, todos os atributos entre aspas duplas, assim como as strings