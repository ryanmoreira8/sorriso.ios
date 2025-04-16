let  nome = 'Jose Silva'

console.log(nome[1]); //[caractere de uma string]
console.log(nome.charAt(1)); //faz a mesma função da de cima


console.log(nome.length);//Indica a quantidade de carecteres possui uma string

console.log(nome.toLowerCase());//Transforma tudo em maiusculo
console.log(nome.toUpperCase());//Transforma tudo em minusculo

console.log(nome.substring(0,4));//O primeiro numero indica onde começa o corte e o segundo indica onde termina

let batata = 'batata'
console.log(nome.split('j'));
console.log(batata.split('t'));//o split corta tudo o que voce espesificar e separa o restante em strings separados

let meunome = 'Jose'
let nomediferente = meunome.replace('Jose', 'Silva')
console.log('Olá', nomediferente);