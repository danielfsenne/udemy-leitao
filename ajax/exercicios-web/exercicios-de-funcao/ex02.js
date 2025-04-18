function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero: Todos os lados são iguais.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles: Dois lados são iguais.";
    } else {
        return "Escaleno: Todos os lados são diferentes.";
    }
}

console.log(classificarTriangulo(5, 5, 5)); // Equilátero
console.log(classificarTriangulo(5, 5, 7)); // Isósceles
console.log(classificarTriangulo(5, 6, 7)); // Escaleno
