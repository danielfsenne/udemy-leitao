function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        deconto:0.1
    }
}
console.log(criarProduto('Notebook', 24489,49))
console.log(criarProduto('Ipad' , 3445,90 ))