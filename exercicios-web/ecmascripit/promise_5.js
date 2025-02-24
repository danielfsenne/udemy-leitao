function funcionarOuNao (valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um Erro!!')
        } else {
            resolve(valor)
        }
    })
}
funcionarOuNao('Testando...', 0.1)
.then(v => console.log(`Valor : ${v}`))
.then(
    v => console.log(v),
    err => console.group(`Erro Esp.: ${err}`)
)
.then(() => console.log('Quase Fim'))
.catch(err => console.log(`Erro : ${err}`))
.then(() => console.log('Fim'))