const alunos = [
    {nome : 'João', nota :7.3, bolsista:false},
    {nome: 'Maria', nota :8.2 , bolsista:true},
    {nome: 'Pedro', nota : 6.5, bolsista: false},
    {nome : 'Ana', nota:9.0, bolsita:false}
]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)