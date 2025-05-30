function getPreco (imposto = 0, moeda = 'RS') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco:4560,
    desc:0.15,
    getPreco
}
global.preco = 18
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro ={preco:4000, desc :0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))