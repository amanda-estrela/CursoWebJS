const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums) {
    if (x == 5) {
        break // break vai se referir a um for, while ou switch  --- vai parar o laço de repetição
    }
    console.log(`${x} = ${nums[x]}`) // so vai mostrar até o 5
}

for (y in nums) {
    if(y == 5) {
        continue //interrompe a repetição atual  e vai para a proxima - funciona em for e while
    }
    console.log(`${y} = ${nums[y]}`)
}
