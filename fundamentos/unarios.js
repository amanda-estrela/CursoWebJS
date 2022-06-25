let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 //tem maior prioridade na hora das operações
console.log(num1)

console.log(++num1 === num2--) //true, compara antes de realizar o --
console.log(num1 === num2) // false