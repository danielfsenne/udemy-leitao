//Não aceita repitição; não é idexido
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintinhas')
times.add('Flamengo')
times.add('Vasco')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)