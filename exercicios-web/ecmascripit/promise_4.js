function gerarNumerosEntre(min, max, tempo) {
    if( min > max) {
        [max, min] = [min, max ]
    }
    return new Promise(resolve => {
        setTimeout(function () {
            const aleatoria = parseInt(Math.random() * ( max - min + 1)) + min
            resolve(aleatoria)
        }, tempo)
    })
}
function gerarVariosNum () {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 1500)

    ])
}
console.time('promise')
gerarVariosNum ()
.then(console.log)
.then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')
})