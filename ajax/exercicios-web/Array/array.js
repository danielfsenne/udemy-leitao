let aprovado = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovado)
aprovado = ['Bia', 'Carlos', 'Ana']
console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])

aprovado[3] = 'Paulo'
console.log(aprovado[3])
aprovado.push('Abia')
console.log(aprovado.length)

aprovado[9] = 'Rafael'
console.log(aprovado.length) 
console.log(aprovado[8] === undefined)
console.log(aprovado[9])

console.log(aprovado)
aprovado.sort()
console.log(aprovado)
delete aprovado[1]
console.log(aprovado[1])
console.log(aprovado[2])

aprovado = ['Bia', 'Carlos', 'Ana']
aprovado.splice(1, 2, 'Elemaento1', '  Elemaento2')
console.log(aprovado)