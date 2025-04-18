const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar( )
const falar = pessoa.falar
falar() //conflitos entre paradigmas: funcional  e 00

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()
