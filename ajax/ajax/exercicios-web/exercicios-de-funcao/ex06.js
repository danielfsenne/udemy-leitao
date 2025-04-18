// Juros simples
function calcularJurosSimples(capitalInicial, taxaJuros, tempo) {
    const montante = capitalInicial + (capitalInicial * taxaJuros * tempo);
    return montante;
}

// Juros compostos
function calcularJurosCompostos(capitalInicial, taxaJuros, tempo) {
    const montante = capitalInicial * Math.pow((1 + taxaJuros), tempo);
    return montante;
}

// Exemplos de uso
console.log(calcularJurosSimples(1000, 0.05, 2)); 
console.log(calcularJurosCompostos(1000, 0.05, 2));
