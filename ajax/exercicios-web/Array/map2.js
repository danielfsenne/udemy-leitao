const carrinho = [
'{ "nome" : "Borracha", "preco" : 3.45}',
'{ "nome" : "Caderno", "preco" : 13.50}',
'{ "nome" : "Kit de Lapis", "preco" : 41.22}',
]

//Retornar como um Array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)