function resolverBhaskara(a, b, c) {
    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
        return "Delta é negativo";
    }

    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    return [x1, x2];
}

console.log(resolverBhaskara(3, -5, 12)); 
console.log(resolverBhaskara(1, -3, 2)); 
console.log(resolverBhaskara(1, -4, 4));  
