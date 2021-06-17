////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// EXERCÍCIOS DO DIA 17/06/2021 /////////////////////////////////////////////////////////
//////////////////////////////////////////////// NATAN BENFICA BARBOSA - LABENU, TRUMA LOVELACE ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////// EXERÍCIOS DE INTERPRETAÇÃO DE CÓDIGO: ////////////////////////////////////////////////////////

// Exercício 01.

/*
(a). no primeiro console.log o resultado será 10. A função será alimentada pelo argumento inserido (2) e vai multiplicar por 5. No segundo console.log o resultado será 50. A função será alimentada pelo argumento inserido (10) e vai multiplicar por 5.
(b). se retirasse os dois console.log e simplesmente invocasse a função, não seria exibido nenhum resultado. A função iria executar seu bloco de código predeterminado e o resultado não será armazenado e nem exibido uma vez que não foi informado return, nem armazenado esse valor e nem exibido usando um console.log. 
*/

// Exercício 02.

/*
(a). nessa função, são inseridos os argumentos de entrada do usuário. O bloco de código transforma os caracteres inseridos em minúsculo e retorna um booleano informando se o texto inserido pelo usuário e transformado na função contém o argumento "cenoura". 
(b). saídas para o console:
    i. true // sim, possui o argumento "cenoura"
   ii. true // sim, possui o argumento "cenoura". Nesse caso, antes de verificar o argumento, a função também 
               transformou todos os caracteres da palavra "CENOURA" em texto minúsculo
  iii. true // sim, possui o argumento "cenoura". Nesse caso, antes de verificar o argumento, a função também 
               transformou todos os caracteres da palavra "Cenouras" em texto minúsculo, e resultou em
               verdadeiro a verificação mesmo que a palavra cenoura estivesse no plural
*/

///////////////////////////////////////////////////// EXERÍCIOS DE ESCRITA DE CÓDIGO: //////////////////////////////////////////////////////////

// ---------------------------------------------------------- Exercício 01 ---------------------------------------------------------------------

/*
// (a) --------------------------------------

function apresentacao1(){
    console.log('Eu sou Natan, tenho 22 anos, moro em Patos de Minas/MG e sou estudante.')
}

apresentacao1()
*/

// (b) --------------------------------------

/*
const saudacao = alert('Olá! Digite corretamente os dados à seguir para gerar a sua apresentação:')

const nome = prompt('Informe seu nome completo:')
const idade = Number(prompt('Digite a sua idade (somente números):'))
const endereco = prompt('Informe a sua cidade:')
const profissao = prompt('Qual é a sua profissão?')

function apresentacao2(nomeForm, idadeForm, enderecoForm, profissaoForm ){
    const texto = `Eu sou ${nomeForm}, tenho ${idadeForm} anos, moro em ${enderecoForm} e atualmente sou ${profissaoForm}.`
    return texto
}

console.log(apresentacao2(nome, idade, endereco, profissao))
*/

/*
// ---------------------------------------------------------- Exercício 02 ---------------------------------------------------------------------

// (a) --------------------------------------

function soma2numeros(num1, num2){
    somaDosArgumentos = num1 + num2
    return somaDosArgumentos

}

let resultadoSoma2numeros = soma2numeros(8, 2)

console.log(resultadoSoma2numeros)
*/
/*

// (b) --------------------------------------

function comparar(num1, num2){
    booleano = num1 >= num2
    return booleano

}

let comparar2numeros = comparar(0, 2)

console.log(comparar2numeros)
*/
/*

// (c) --------------------------------------

function verificarPar(num){
    booleanoPar = (num % 2) === 0
    return booleanoPar

}

let verificarSePar = verificarPar(1111) 

console.log(verificarSePar) // false pois 1111 é impar
*/
/*

// (d) --------------------------------------

function tamanhoMensagemMaiuscula(frase){
    let frase2 = `A frase: "${frase.toUpperCase()}", possui ${frase.length} caracteres, que foram todos convertidos em caixa alta.`
    return frase2

}

let texto = 'hoje acordei gripado'

let textoModificado = tamanhoMensagemMaiuscula(texto)

console.log(textoModificado)
*/
// ---------------------------------------------------------- Exercício 03 ---------------------------------------------------------------------

/*
numero1 = Number(prompt('Digite o número 30:'))
numero2 = Number(prompt('Agora, digite o número 3:'))
alert('Agora, vamos realizar as 4 operações básicas e retornaremos os resultados no console. Verifique por gentileza.')

function soma(num1, num2){
    somaFuncao = num1 + num2
    return somaFuncao
}

function diferenca(num1, num2){
    diferencaFuncao = num1 - num2
    return diferencaFuncao
}

function multiplicacao(num1, num2){
    multiplicacaoFuncao = num1 * num2
    return multiplicacaoFuncao
}

function divisao(num1, num2){
    divisaoFuncao = num1 / num2
    return divisaoFuncao
}

const somaResultado = soma(numero1, numero2)
console.log(`O resultado da soma é: ${somaResultado}.`)

const subtracaoResultado = diferenca(numero1, numero2)
console.log(`O resultado da subtração é: ${subtracaoResultado}.`)

const multiplicacaoResultado = multiplicacao(numero1, numero2)
console.log(`O resultado da multiplicação é: ${multiplicacaoResultado}.`)

const divisaoResultado = divisao(numero1, numero2)
console.log(`O resultado da divisão é: ${divisaoResultado}.`)
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// FIM DOS EXERCÍCIOS DO DIA 17/06/2021 ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
