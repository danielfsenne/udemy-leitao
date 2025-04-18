//Com promise...
const { rejects } = require('assert')
const https = require('http')
const { get } = require('https')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, rejects) => {
         https.get(url, res => {
                 let resultado = ''
         
                 res.on('data', dados => {
                     resultado += dados 
                 })
         
                 res.on('end', () => {
                    try {
                        resolve(JSON.parse(resultado))
                    }
                    catch(e) {
                        rejects(e)
                       
                    }
                })
             })
    })
}
let nomes = []
getTurma ('A').then (alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
    })
    getTurma('C').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
        console.log(nomes)
    })
})

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))
.then((x => console.log(x)))
.then(alunos => alunos.map(aluno =>aluno.nome))
.then(nomes => console.log(nomes))