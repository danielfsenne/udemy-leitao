function tratarErroLancar (erro){
    //throw new Error('...') 
    throw 10
}

function imprimirNomeGritado(obj) {
    try {       //Potencialmente pode dar um erro

        console.log(obj.name.toUpperCause() + '!!!')
    } catch(e){
        tratarErroLancar(e)
    } finally {     //Sempre será executado
        console.log('final')
    }
}
const obj = {nome:'Roberto'}
imprimirNomeGritado(obj)