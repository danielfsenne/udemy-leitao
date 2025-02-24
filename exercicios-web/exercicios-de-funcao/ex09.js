function classificarNota(nota) {
    if (nota < 38) {
        return `Reprovado com nota ${nota}`;
    }

    const proximoMultiploDe5 = Math.ceil(nota / 5) * 5;
    if (proximoMultiploDe5 - nota < 3) {
        nota = proximoMultiploDe5;
    }

    return `Aprovado com nota ${nota}`;
}

// Exemplos de uso
console.log(classificarNota(84)); 
console.log(classificarNota(29)); 
console.log(classificarNota(38)); 
console.log(classificarNota(37)); 
