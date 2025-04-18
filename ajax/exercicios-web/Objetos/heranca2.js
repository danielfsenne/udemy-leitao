// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0';
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // 0 A B C

// Objeto base para carros
const carro = {
    velAtual: 0,
    velMax: 300,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} km/h de ${this.velMax} km/h`
    }
};

// Ferrari com herança de carro
const ferrari = {
    modelo: 'F40',
    velMax: 300, // Shadowing
};

// Volvo com herança de carro e método sobrescrito
const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
};

// Configurando protótipos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)  


volvo.aceleraMais(100)
console.log(volvo.status())
