function Aula (nome, videoID) {
    this.nome = nome
    this.videoId = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Bem Vindo', 456)
console.log(aula1, aula2)

//Simulando o operaor new

function novo(f,...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Bem Vindo', 456)
console.log(aula3, aula4) 