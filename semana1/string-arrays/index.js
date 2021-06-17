//////////////////////// RESOLUÇÃO DO EXERCÍCIO DA TARDE ////////////////////////
////////////////////////     NATAN BENFICA BARBOSA       ////////////////////////
////////////////////////    LABENU, TURMA LOVELACE       ////////////////////////

// --------------------- Exercícios de Interpretação de Código ---------------------

// ---------- Exercício 01 ----------

/*
cód a. - cria a variável com nome de "array" sem um valor definido. No console vai exibir a mensagem undefined / indefinida

cód b. - determina que a partir de agora a variável tera valor null. No console vai exibir a mensagem null

cód c. - determina que a partir de agora a variável array será composta por um array com números de 3 a 13. No console pede pra imprimir a quantidade de itens dessa lista usando length

cód d. - cria a variável 'i' com valor 0. Pede pra imprimir no console o indice que corresponde ao valor atribuído à variável 0, fazendo com que seja impresso o item do array que esteja na posição 0, que nesse caso é o número 3

cód e. - determina que a partir de agora o número que está na posição 1 do array (representado pelo valor da variável i + 1, ou seja, o número 4) será substituído pelo número 19. No console será exibido a lista do array com os números 3, 19, 5, 6, 7, 8, 9, 10 , 11, 12, 13.

cód f. - cria a constante "valor" e atribui que o valor dessa constante será o índice correspondente à posição de número 6 ( valor da variável i, que é 0, + 6) do array, que nesse caso é o número 9 (contando de ordem crescente a partir do 0). No console será exibido o número 9
*/

// ---------- Exercício 02 ----------

/*
foi criada a constante "frase", onde o valor é determinado pelo usuário através de um prompt que solicita os dados com a seguinte instrução: "Digite uma frase".
se a entrada do usuário for: "Subi num ônibus em Marrocos", o valor impresso será: "SUBI NUM ÔNIBUS EM MIRROCOS" pois o console está determinado que a string terá todos os caracteres impressos em caixa alta pela função toUpperCas() e a vogal A será substituída pela vogal I conforme determinado pela função replacceAll.
além disso também será impresso um numeral informando a quantidade de caracteres da frase logo em seguida
*/

// --------------------- Exercícios de Escrita de Código ---------------------

// ---------- Programa 01 ----------

/*
const nomeDoUsuario = prompt('Olá usuário! Por favor, me diga, qual é o seu nome?')
const emailDoUsuario = prompt('Ok. Agora informe o seu e-mail:')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso! Seja bem-vindo(a) ${nomeDoUsuario}!`)
*/

// ---------- Programa 02 ----------

/*
let comidas = ['Churrasco', 'Coxinha', 'Lasanha', 'Hambúrguer', 'Torta de Bis']

console.log(comidas)

console.log('Essas são as minhas comidas favoritas:')
console.log('*', comidas[0])
console.log('*', comidas[1])
console.log('*', comidas[2])
console.log('*', comidas[3])
console.log('*', comidas[4])

// essa lista aqui também poderia ser feita apenas expandindo o array no console. Né? Ou deveria ser feito desse jeito aqui mesmo?

let comidaUsuario = prompt('Olá usuário! Qual a sua comida favorita?') // usar "Pastel"
comidas [1] = comidaUsuario
console.log(comidas)
*/

// ---------- Programa 03 ----------

/*
let listaDeTarefas = []

const tarefa1 = prompt('Escreva uma tarefa que você precisa realizar hoje (tarefa 1):') // lavar a louça
const tarefa2 = prompt('Escreva outra tarefa que você precisa realizar hoje (tarefa 2):') // fazer a janta
const tarefa3 = prompt('Escreva mais uma tarefa que você precisa realizar hoje (tarefa 3):') // tomar banho

listaDeTarefas = [tarefa1, tarefa2, tarefa3]

console.log(listaDeTarefas)

let tarefaExecutada1 = Number(prompt('Digite o número referente a tarefa que você já executou:'))

let tarefaExecutada2 = tarefaExecutada1 - 1
listaDeTarefas.splice(tarefaExecutada2, 1)

console.log(listaDeTarefas) // ADOREI FAZER ESSE PROGRAMINHA :D
*/

////////////////////////////// FIM DO EXERCÍCIO //////////////////////////////////////////
