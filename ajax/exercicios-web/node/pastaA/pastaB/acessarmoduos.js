const moduloA = require('../../moduloa')
console.log(moduloA.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia')
    res.end()
}).listen(8080)