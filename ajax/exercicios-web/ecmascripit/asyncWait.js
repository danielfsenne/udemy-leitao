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

//Recurso so ES8
//Objetivo de facilitar o uso de Promises...

let obterAlunos = async() => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')    
    return [].concat(ta, tb, tc)
    //Retorna um objeto AsyncFunction
}
obterAlunos()
.then(alunos => alunos.map(a => a.nomes))
.then (nomes => console.log(nomes))