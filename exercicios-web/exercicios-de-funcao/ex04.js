function dividirEExibir(dividendo, divisor) {
    const resultado = Math.floor(dividendo / divisor); // Parte inteira da divisão
    const resto = dividendo % divisor; // Resto da divisão

    console.log(`Resultado: ${resultado}`);
    console.log(`Resto: ${resto}`);
}

dividirEExibir(10, 3);

dividirEExibir(20, 4);


