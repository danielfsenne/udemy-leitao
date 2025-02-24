const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyParser.urlencoded({extended : true}))

app.get('/produtos', (req, next, res) => {
    res.send(bancodedados.getProdutos()) 
})
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancodedados.getProduto(req.params.id))
})
app.post('/produtos', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
        nome : req.body.nome,
        preco : req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.salvarProduto({
        nome : req.body.nome,
        id:req.params.id,
        preco : req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.excluirProdutos(req.params.id)
    res.send(produto) //JSON
})


app.listen(porta, () => {
    console.log(`Servidor Executando na porta ${porta}`)
})