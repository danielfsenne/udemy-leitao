let isAtivo = false
console.log(isAtivo)
 
isAtivo = true
console.log(isAtivo)
isAtivo = 1 
console.log(!!isAtivo) // Um Símbolo de exclamação como negação, dois significam 

console.log('tipos verdadeiros...')
console.log(!! 3)
console.log(!!-1)
console.log(!! "") // Espaço vazio
console.log(!! {}) //Objeto
console.log(!![]) //Array
console.log(!! Infinity)
console.log(!! (isAtivo = true))

console.log('Tipos falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!! undefined)
console.log(!! NaN)
console.log(!!(isAtivo = false))

console.log('Para finaliazar..')
console.log(!! ('' || 0 || null || 'epa'))

let nome = ''
console.log(nome || 'Desconhecido')