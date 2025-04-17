Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome" : "Borracha", "preco" : 3.45}',
    '{ "nome" : "Caderno", "preco" : 13.50}',
    '{ "nome" : "Kit de Lapis", "preco" : 41.22}',
    ]
    
    //Retornar como um Array apenas com os preços
    
    const paraObjeto = json => JSON.parse(json)
    const apenasPreco = produto => produto.preco
    
    const resultado = carrinho.map(paraObjeto).map2(apenasPreco)
    console.log(resultado)