function calcularOperacoes(valor1, valor2) {
    console.log("Soma:", valor1 + valor2);
    console.log("Subtração:", valor1 - valor2);
    console.log("Multiplicação:", valor1 * valor2);

    if (valor2 !== 0) {
        console.log("Divisão:", valor1 / valor2);
    } else {
        console.log("Divisão: Não é possível dividir por zero");
    }
}


calcularOperacoes(10, 2);
