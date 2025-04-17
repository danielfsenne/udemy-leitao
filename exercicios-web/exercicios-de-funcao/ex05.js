function formatarDinheiro(valor) {
    return `R$${valor.toFixed(2).replace(".", ",")}`;
}

console.log(formatarDinheiro(0.30000000000000004)); 
console.log(formatarDinheiro(1234.567)); 
console.log(formatarDinheiro(10)); 
