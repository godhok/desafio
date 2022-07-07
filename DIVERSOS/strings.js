/* STRINGs */

//DEFININDO variavel = string
var string = 'palavras'
// ou talvez
const string2 = 'numeros'

console.log(string2)

// CONVERTENDO ALGO EM STRING
const NANshi = 106
const convertido = new String(NANshi)
console.log(convertido)

/* Um pouco dificil entender o conceito de new
    já que não sei orientado a objetos
    Mas vamos lá!

   Defini essa constante NANshi,
   mas estou com problema, pois ela é sim um numero.

   Pra resolver essa questão, usei a definicao de uma segunda variavel recebendo:

   new - pra criar uma instancia da 'classe' do obj
   e a função String() convertendo o parametro definido (Minha constante anterior)
*/

// Outra forma de converter tipos basicos é direto no console
const num = 500
console.log(num.toString())
console.log(typeof num.toString())

// const APegadinhadoMalando = "meu terminal exibe string sem aspas"

// USANDO STRINGS
// CONCATENANDO (juntando né)

var nome = 'Lucas'
var sobrenome = 'Porto'
var nomeCompleto = 'Meu nome completo é : ' + nome + ' ' + sobrenome
console.log(nomeCompleto)

// https://www.alura.com.br/artigos/strings-com-javascript-o-que-sao-e-como-manipular?gclid=EAIaIQobChMI19uP0KfO-AIVyRvUAR35QgvgEAAYAyAAEgL01PD_BwE
