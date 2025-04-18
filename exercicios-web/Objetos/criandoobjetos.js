//usando a notação literal

const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object )
const obj2 = new Object
console.log(obj2)

//Função construtora
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto ('caneta', 7.99, 0.14)
const p2 = new Produto ('Notebook', 3000, 0.32)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7800, 4)
const f2 = criarFuncionario('Maria', 5600, 3)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create (null)
filha.nome ='Ana'
console.log(filha)

//Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)