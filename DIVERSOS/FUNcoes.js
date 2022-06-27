/*  funcoes precisam de chamada
    Parametro é sao as informações declaradas na função
    Ação é o processo feito até conseguir o resultado
    Retorno tras as infos requeridas
*/

/*  São Ações executadas assim que são chamadas ou em decorrencia de algum evento. */

/*  Funções podem receber parametros e retornar um resultado*/

/*  semantica

  function ação(parametro){
    retorno resultado            <-- ação | resultado
  }

  ação(5)                        <-- chamada(parametro)

*/

/*
function parimp(n){
  if (n%2==0) {
    return 'par'
  } else {
    return 'impar'
  }
}
console.log(parimp())

teste pra verificar a funcionalidade da acao, resultado, parametro e chamada.
*/

/*
function soma(n1, n2) {
  return n1 + n2
}

console.log(soma())

teste pra verificar a melhor definição de parametros
nesse caso, se nao definisse o n1 e n2, a sua soma resultaria em NAN
*/

/*
let v = function (x = 0) {
  return x * 2
}

console.log(v(5))

função dentro de uma variavel
*/

/*
  calculo de fatorial


*/

function fatorial(n) {
  let fat = 1
  for (let c = n; c > 1; c--) {
    fat *= c
  }
  return fat
}

console.log(fatorial(5))
