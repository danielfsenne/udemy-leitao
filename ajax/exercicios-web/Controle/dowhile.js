function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor (valor)
}
let opcao = -1  //Com o do while, não é necessário colocar um valor inicial
do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção que foi escolhida foi  ${opcao}.`)
}while (opcao !=  -1)
console.log('Até a próxima')