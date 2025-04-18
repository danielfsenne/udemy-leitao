const notas = [2.2, 3.4, 6.7, 8.8, 9,4]

//Sem usar o CallBack

const notasBaixas1 = []
for (let i in notas ) {
    if( notas[i] < 7 ) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com CallBack

notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasBaixas2)
const notasMenor7 = nota => nota < 7
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)