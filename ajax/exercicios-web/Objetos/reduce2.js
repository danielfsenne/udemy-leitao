const alunos = [
    {nome : 'João', nota :7.3, bolsista:false},
    {nome: 'Maria', nota :8.2 , bolsista:true},
    {nome: 'Pedro', nota : 6.5, bolsista: false},
    {nome : 'Ana', nota:9.0, bolsita:false}, 
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))