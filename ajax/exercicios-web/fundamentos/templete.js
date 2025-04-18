const nome = "Rebecca"
const concatenacao = "Olá" + nome + '!'
const templete = `
Olá
${nome}!`

console.log(concatenacao, templete)

//expressões ...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!!`)