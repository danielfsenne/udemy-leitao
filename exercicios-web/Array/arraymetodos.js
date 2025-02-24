const pilotos = ['  Vettel', 'Aloso', 'Raikkonen', 'Massa']
pilotos.pop() //Mass quebrou o carro => Remove o ultimo elemento da lista
console.log(pilotos)

pilotos.push('Vershtappen')
console.log(pilotos)

 pilotos.shift() //Remobe o prmeiro elemento da lista
 console.log(pilotos)
 pilotos.unshift( 'Hamilton' )
 console.log(pilotos)

 //spice pode ajudar a adicionar e remover elementos

 //adicionar
 pilotos.splice(2, 0, 'Bottas', ' Massa')
 console.log(pilotos)

 //remover
 pilotos.splice(3, 1) //Massa quebrou
console.log(pilotos)

const algunsPilotos1 =  pilotos. slice(2) //novo array gerado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2 )
