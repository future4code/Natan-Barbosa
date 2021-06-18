//////////////////////////////////// NATAN BENFICA BARBOSA //////////////////////////////////////////
//////////////////////////////////// LABENU TURMA LOVELACE //////////////////////////////////////////
////////////////////////////////////       18/06/2021      //////////////////////////////////////////

// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Digite a altura do retângulo, em centímetros:'))
  const largura = Number(prompt('Digite a largura do retângulo, em centímetros:'))
  const area = (altura * largura)
  console.log(area)
  return area
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Em que ano nós estamos?'))
  const anoNascimento = Number(prompt('Em que ano você nasceu?'))
  const idade = (anoAtual - anoNascimento)
  console.log(idade)
  return idade
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const pesoFunction = peso
  const alturaFunction = altura
  const imc = pesoFunction / (alturaFunction * alturaFunction)
  return imc
  // dava pra fazer de outro jeito mas eu gosto assim.
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const userNome = prompt('Qual é o seu nome?')
  const userIdade = Number(prompt('Qual é a sua idade? (digite somente números)'))
  const userMail = (prompt('Informe o seu e-mail:'))
  const apresentacao = `Meu nome é ${userNome}, tenho ${userIdade} anos, e o meu email é ${userMail}.`
  console.log(apresentacao)
  return apresentacao
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Qual é a sua cor favorita?:')
  const cor2 = prompt('Qual é a sua segunda cor favorita?:')
  const cor3 = prompt('Qual é a sua terceira cor favorita?:')
  const cores = [cor1, cor2, cor3]
  console.log(cores)
  return cores
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const metaVendaIngressos = custo / valorIngresso
  return metaVendaIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const comparaString = string1.length === string2.length
  return comparaString  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length - 1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroTermo = array[0] 
  let ultimoTermo = array[array.length - 1]
  array.pop()
  array.push(primeiroTermo)
  array[0] = ultimoTermo
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const verificarCase = string1.toUpperCase() === string2.toUpperCase()
  return verificarCase
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Qual é o ano atual?')) // recebe o ano
  const anoNascimento = Number(prompt('Em que ano você nasceu?')) // recebe a data de nascimento
  const anoIdentidade = Number(prompt('Em que ano a sua carteira de identidade foi emitida?')) // recebe a expedição do rg
  
  const idade = anoAtual - anoNascimento // armazena a idade do sujeito
  const identidade = anoAtual - anoIdentidade // armazena a idade do RG

  const ate20 = (idade <= 20) && (identidade >= 5)
  const entre21ate50 = (idade > 20) && (idade <= 50) && (identidade >= 10)
  const de51emDiante = (idade > 50) && (identidade >= 15)
  
  verificaCondicao = (ate20 || entre21ate50 || de51emDiante)
  
  console.log(verificaCondicao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  condicao1 = ano % 400 === 0
  condicao2 = (ano % 4 === 0) && !(ano % 100 === 0) && !(condicao1)
  
  verificaBissexto = condicao1 || condicao2
  
  console.log(verificaBissexto)

  return verificaBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt('Você tem mais de 18 anos?')
  const escolaridade = prompt('Você possui Ensino Médio completo?')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  
  condicao1 = idade === 'sim'
  condicao2 = escolaridade === 'sim'
  condicao3 = disponibilidade === 'sim'
  
  const verificacao = condicao1 && condicao2 && condicao3
  
  console.log(verificacao)
}

///////////////////////// FIM DO PROJETO "LISTA DE EXERCÍCIOS DO DIA 18/06/2021" ////////////////////