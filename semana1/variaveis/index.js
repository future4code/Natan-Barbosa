// ---------- EXERCÍCIO DO DIA 14/06/2021 ------------------------- 

// ---------- NATAN BENFICA BARBOSA - TURMA LOVELACE -------------- 

// TODOS OS EXERCÍCIOS QUE ENVOLVIAM ESCRITA DE CÓDIGOS, FORAM INATIVADOS MARCANDO COM COMENTÁRIO (/*código*/) PRA NÃO FICAR BUGANDO QUANDO RODAR O HTML :D

// ---------- RESPOSTAS DOS EXERCÍCIOS DE INTERPRETAÇÃO ----------

// 01. 

/*
se let a = 10 e let b = 10
resultado para console.log(b) = 10
se b = 5
resultado para console.log(a, b) = 10 5
*/

// 02.

/* 
se let a = 10, let b = 20 e let c
temos que c é indefinida
quando definimos que c = a; b = c; e, a = b
definimos que c = 10; b = c = 10; e, a = b = 10
logo, resultado para console.log(a, b, c) = 10 10 10 
*/

// 03.

/*
usando o camelCase podemos definir os seguintes nomes para as variáveis:
variavel p = hrsTrabalhoDia
variavel t = salarioDia
o prompt criar uma interface de inserção de dados onde o usuário entra com os dados exigidos conforme a saída
dessa forma, a variavel "hrsTrabalhoDia" gera um prompt solicitando ao usuário que informe o total de horas de trabalho do mesmo por dia, enquanto a variável "salarioDia" solicita que o user informe a remuneração total do mesmo para um unico dia trabalhado
o alert cria uma interface de aviso, informando o resultado da operação entre as variáveis inserida no código. Dessa forma, o alert irá resultar o salário-hora do user fazendo o quociente entre as variáveis "salarioDia" sobre a variável "hrsTrabalhoDia"
*/

// ---------- RESOLUÇÃO DOS EXERCÍCIOS DE ESCRITA DE CÓDIGOS ----------

// ---------- PROGRAMA 01 DE 03 ---------------------------------------

/*
let nome
let idade
console.log(typeof nome)
console.log(typeof idade)

//esse tipo undefined foi impresso pois não foram atribuídos valores para as variáveis nome e idade 

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")
console.log(nome)
console.log(typeof nome)
console.log(idade)
console.log(typeof idade)
// ao definir o prompt como valor para a variável, o typeof o acusa como um tipo de string (texto)
console.log('Olá', nome, 'você possui', idade, 'anos!')
*/

// ---------- PROGRAMA 02 DE 03 ---------------------------------------

/*
let roupaCor = prompt("Você está usando roupa azul hoje?")
let cafeDaManha = prompt("Você fez seu café da manhã sozinho?")
let almoco = prompt ("Você lembrou de tirar a carne para descongelar?")

roupaCor = false
cafeDaManha = true
almoco = true

console.log("Você está usando roupa azul hoje?", roupaCor)
console.log("Você fez seu café da manhã sozinho?", cafeDaManha)
console.log("Você lembrou de tirar a carne para descongelar?", almoco)
*/

// ---------- PROGRAMA 02 DE 03 ---------------------------------------

/*
let a = 10
let b = 25

console.log(a, b) // a = 10 e b = 25

let c

c = b // c = 25
b = a // b = 10
a = c // a = 25

// criando a varíavel c indefinida depois basta definir um novo valor a ela para inverter os valores de a e b

console.log(a, b, c)

// a = 25, b = 10 e c = 25
*/


// ---------- FIM DO EXERCÍCIO DO DIA ---------------------------------------