class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancamento(...lancamento) {
        lancamento.forEach (l => this.lancamento.push(l))

    }
    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach (
            l => {valorConsolidado += l.valor

             }) 
             return valorConsolidado
    }
}
const salario = new Lancamento ('Salario', 45000)
const contadeLuz = new Lancamento ('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamento(salario, contadeLuz)
console.log(contas.sumario()) 