// console.log('Natan Benfica Barbosa, Labenu, Turma Lovelace, 15/06/2021')

/*
---------- EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ----------

Questão 01 ----------

Foram definidas 3 constantes, sendo a primeira armazendando o resultado "true" a segunda como "false" e a terceira como "!bool2" que é o inverso do resultado de bool2 (ou seja, true).
No console log "a" faz uma comparação entre 2 variáveis com o operador "E (&&)", onde o resultado será "false".
No console log "b" faz uma comparação entre 3 variáveis com o operador "E (&&)", onde o resultado será "false".
No console log "c" faz uma comparação entre 3 variáveis com dois operadores, sendo uma comparação "OU (||)" onde o resultado será true, e depois compara com "E (&&)" o inverso da variável "resultado" (que irá retornar true). Logo o resultado final é true.
No console log "d" será exibido a tipagem da variável "resultado" que é um boolean.

Questão 02 ----------

O problema do código do colega está na definição e utilização das duas variáveis declaradas com prompt. Na segunda variável ele deseja somar as duas entradas das variáveis declaradas anteriormente através do prompt, o quenão é possível pois o prompt armazena uma string mesmo que usuário declare numero nas respostas. Dessa forma, para corrigir o erro, o dev precisa utilizar Number antes do prompt para que haja a conversão de string para numero e assim o codigo possa realizar operações aritmeticas com os resultados dessas variaveis.

Questão 03 ----------

Conforme resolução anterior, segue abaixo o código corrigido para que seja satisfeito o comando pretendido pelo colega:

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
const soma = primeiroNumero + segundoNumero
console.log(soma)
*/

// ---------- EXERCÍCIOS DE ESCRITA DE CÓDIGO ----------

// ---------- Programa 01 ----------

/*
const idadeUser = Number(prompt('Insira a sua idade (SOMENTE NÚMEROS):'))
const idadeAmigo = Number(prompt('Insira a idade do seu melhor amigo(a) (SOMENTE NÚMEROS):'))
console.log('Sua idade é maior do que a do seu melhor amigo(a)?', idadeUser > idadeAmigo)
console.log('Essa é a diferença de idade entre vocês:', idadeUser - idadeAmigo)
*/

// ---------- Programa 02 ----------

/*
const numeroPar = Number(prompt('Insira um número PAR:'))
console.log(numeroPar % 2)
*/

// comentário 1: independentemente de qual seja o número par inserido, o console.log sempre exibirá resto 0
// comentário 2: se o usuário inserir um número ímpar, o console.log exibirá um resultado com resto maior que 0

// ---------- Programa 03 ----------

// há várias formas de fazer esse programa, mas acho que a melhor delas é assim (gosto do código bem detalhadinho):

/*
const idadeUsuario = Number(prompt('Qual a sua idade em anos?'))

const idadeMeses = idadeUsuario * 12
console.log('Sua idade em meses é:', idadeMeses, 'meses!')

const idadeDias = idadeMeses * 30
console.log('Sua idade em dias é:', idadeDias, 'dias!')

const idadeHoras = idadeDias * 24
console.log('Sua idade em horas é:', idadeHoras, 'horas! (e contando...)')
*/

// ---------- FIM DO EXERCÍCIO DO DIA ----------