const imprimirResultado = function(nota) {
    if( nota >= 7) {
        console.log('Aprovado')

    } else {
        console.log('Reprovado')
    }
}
imprimirResultado( 7.8)
imprimirResultado(6.2)
imprimirResultado('Epa!!!') //Cuidado