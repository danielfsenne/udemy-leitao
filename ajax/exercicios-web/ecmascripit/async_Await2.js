function gerarNumerosEntre(min, max, numerosProibidos) {
    if( min > max) {
        [max, min] = [min, max ]
    }
    return new Promise((resolve, reject ) => { 
        const fator = max - min + 1
        const aleatoria = parseInt(Math.random() * ( max - min + 1)) + min
        if(numerosProibidos.includes(aleatoria)) {
            reject('Numero repetido')
        } else {
            resolve(aleatoria)
        }
    })
}
async function gerarMegaSena(qtdDeNumeros) {
    const numeros = []
    for(let _ of Array(qtdDeNumeros).fill()){
      numeros.push(await gerarNumerosEntre)(1, 60, numeros)
    }
    return numeros
}

gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)

    gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)