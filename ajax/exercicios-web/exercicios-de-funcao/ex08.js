function avaliarPontuacoes(stringPontuacoes) {
    const pontuacoes = stringPontuacoes.split(" ").map(Number);
    let recordes = 0;
    let piorJogo = 0;
    let melhorPontuacao = pontuacoes[0];
    let piorPontuacao = pontuacoes[0];

    pontuacoes.forEach((pontuacao, index) => {
        if (pontuacao > melhorPontuacao) {
            melhorPontuacao = pontuacao;
            recordes++;
        }
        if (pontuacao < piorPontuacao) {
            piorPontuacao = pontuacao;
            piorJogo = index + 1; 
        }
    });

    return [recordes, piorJogo];
}

const stringPontuacoes = "10 20 20 8 25 3 0 30 1";
console.log(avaliarPontuacoes(stringPontuacoes)); 
