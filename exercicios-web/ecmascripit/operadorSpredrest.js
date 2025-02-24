//operador...rest(juntar), spreed(espalhar)
//Usar rest como parâmetro de função

//Usar spreed como objeto
const funcionario = {nome :'Maria', salario : 2347.0}
const clone = {ativo : true, ... funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA,'Rafaela']
console.log(grupoFinal)