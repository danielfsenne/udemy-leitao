const pessoa = {
    nome :'Rebecca',
    idade:21,
    peso:49
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries (pessoa).forEach(([chave, valor])=> {
    console.log(`${[chave]}: ${[valor]}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true,
    writable:false,
    value:'01/01/2019' 
})
pessoa.dataNascimento = '01/10/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assig (ECMAScript 2015 )
const dest ={a : 1}
const o1 = {b : 2}
const o2 = {c : 3, a:4 }
const obj =  Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
//Assing, forma de concatenar vários objetos em um só