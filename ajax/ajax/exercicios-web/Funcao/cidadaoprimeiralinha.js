//Função em javascript é First-Class Object (Citizenas)
//Higher-order function

//criar uma forma literal
function fun1() {}

//Armazenar em uma varíavel
const fun2 = function() {}

//Armazenar um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () {
     return 'Opa'
} 
console.log(obj.falar())

//Passar função como parâmetro
function run(fun) {
    fun()
}

run (function () {console.log('Executando...')})

//uma função pode conter uma outra função

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4 )