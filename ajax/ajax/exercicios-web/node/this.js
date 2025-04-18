console.log(this === global)
//This fora de uma função aponta para exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis () {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    //This dentro de uma função aponta para a global
}
logThis