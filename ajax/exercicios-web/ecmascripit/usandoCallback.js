//Sem promise...
const https = require('http')

const getTurma = (letra, callBack) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    https.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados 
        })

        res.on('end', () => {
            callBack(JSON.parse(resultado))
        })
    })
}
let nomes = []
getTurma ('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
    })
    getTurma('C', alunos => {
        nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
        console.log(nomes)
    })
})