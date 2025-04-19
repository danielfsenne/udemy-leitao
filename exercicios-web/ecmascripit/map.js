const tecnologia = new Map()
tecnologia.set('react', {frameWork : false})
tecnologia.set('angular', {farmeWork : true})

console.log(tecnologia.react)
console.log(tecnologia.get('react').frameWork)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{} ,'Objeto'],
    [123, 'Numero']
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)