// Closueres, escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular funções externas à função


//Contexto Léxico em ação

const x = "Global" 

function fora() {
    const x = 'Local'
    function dentro() {
        return x 
    }
    return dentro
}

const minhaFuncao = fora() 
console.log(minhaFuncao ())
