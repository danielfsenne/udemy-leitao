const contadorA = require('./instanciaunica')
const contadorB =require ('./instanciaunica')

const contadorC = require('./instancianova') ()
const contadorD = require('./instancianova') ()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)