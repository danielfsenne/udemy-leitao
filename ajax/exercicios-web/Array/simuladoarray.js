quaseArray = {0 : 'Ana', 1: 'Ricardo', 2: 'Cleitinho' }
console.log(quaseArray )
Object.defineProperties(quaseArray, 'tostringg', {
    value : function() {return Object.value (this) },
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia ']
console.log[quaseArray.toString(), meuArray]  