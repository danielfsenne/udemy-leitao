let p = new Promise(function (resolve) {
    resolve(['Ana', 'Daniel', 'Mario']) 
    
})
function primeiroElemento (array) {
    return array[0]
}
function primeiraLetra(string) {
    return string[0]
}
const letraMinuscula = letra => letra.toLowerCase()
p
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(letraMinuscula => console.log(letraMinuscula))