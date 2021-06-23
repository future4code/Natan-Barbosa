//////////////////////////////////////// EXERCÍCIOS DO DIA 23/06/2021 /////////////////////////////////////////
////////////////////////////////////////   LABENU - TURMA LOVELACE    /////////////////////////////////////////
////////////////////////////////////////    NATAN BENFICA BARBOSA     /////////////////////////////////////////

// -------------------------------| Exercícios de interpretação de código |------------------------------------

// --------------- INTERPRETAÇÃO 01 ---------------
// nesse código, o loop for vai sempre somar +1 no incremento (quando a condição de continuidade i < 5 for verdadeiro e partindo do princípio de que i = 0) e armazenar o valor da soma na variável definida fora do escopo. Dessa forma, a partir do 2º loop o valor inicial de i passa para o próximo numero inteiro na ordem crescente. No primeiro loop ele define i = 0 e compara se 0 < 5. Se verdadeiro soma +1 ao valor de i e por fim soma o valor novo de i (que agora é 1) ao valor da variável 'valor' definida previamente como 0 e armazena esse novo resultado (0 + 1 = 1). E assim o programa roda sucessivamente, aumentando o valor de iníncio de i a cada novo loop, até que o booleano i < 5 seja false, e atualizando o valor da variável 'valor' a cada novo loop. Quando a condição de continuação retorna false, o loop é interrompido e o console irá exibir o resultado '10'.

// ---------- INTERPRETAÇÃO 02, (item a) ----------
// no console serão impressos todos os númmeros do array que são maiores que 18, um por vez a cada novo loop, seguindo a sequência dos indices do array

// ---------- INTERPRETAÇÃO 02, (item b) ----------
// uma forma de acessar o índice de cada elemento dessa lista para armazená-los ou imprimí-los no console seria modificando o código para imprimir o array ou então utilizando o indexOf em combinaçao com o "for of". Ou seja, somente o for of não seria suficiente

// --------------- INTERPRETAÇÃO 03 ---------------
// se o usuário digitar o número 4, o programa irá fazer uma comparação do tamanho do argumento inserido pelo usuário (4 ) com o tamanho do argumento inicial definido pela variável 'quantidadeAtual' (0). Se o valor inserido pelo usuário for maior, o programa inicia o loop, onde a cada novo início do loop insere sempre +1 caractere '*' até igualar a quantidade informada pelo usuário.

// -----------------------------------| Exercícios de escrita de código |--------------------------------------

/*
// ---------- ESCRITA 01 ----------


const bichinhos = Number(prompt('Olá usuário! Quantos bichinhos de estimação você tem?'))
const totalDePets = []

verificarPets = (numero) => {
    if (numero <= 0) {
        console.log('Que pena... mas você pode adotar um pet!')
    } else {
        let inicio = 0
        let usuario = numero
        while (inicio < usuario) {
            let nomeDoPet = prompt('Informe o nome dos seus pets, um por um:')
            totalDePets.push(nomeDoPet)
            inicio ++
        }
    }
    console.log(totalDePets)
}

verificarPets(bichinhos)
*/

/*
// ---------- ESCRITA 02 ----------

const arrayOriginal = [3, 4, 7, 12, 16]


// ----------  (item a)  ----------
for (let numero of arrayOriginal) {
    console.log(numero)
}

// ----------  (item b)  ----------
for (let numero of arrayOriginal) {
    console.log(numero / 2)
}

// ----------  (item c)  ----------
const novoArrayNumerosPar = () => {
    let novoArray = []
    for (let numero of arrayOriginal) {
        if (numero % 2 === 0) {        
            novoArray.push(numero)
        } else {
        }
    }
    console.log(novoArray)
    return novoArray
}

novoArrayNumerosPar()


// ----------  (item d)  ----------

const novoArrayDeStrings = () => {
    let arrayStrings = []
    for (let numero of arrayOriginal) {
        const indiceArray = arrayOriginal.indexOf(numero)
        arrayStrings.push(`O elemento do índex ${indiceArray} é ${arrayOriginal[indiceArray]}`)
    }
    console.log(arrayStrings)
}

novoArrayDeStrings()
*/