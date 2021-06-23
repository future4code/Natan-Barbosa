//////////////////// NATAN BENFICA BARBOSA - LABENU, TURMA LOVELACE ////////////////////
////////////////////         PR DO DIA 21/06/2021 - OBJETOS         ////////////////////

////////////////////      Exercícios de Interpretação de Código     ////////////////////

// ----------| Exercício 01 |----------

/*
no primeiro console.log será exibido o nome do ator "Matheus Nachtergaele", pois o mesmo refere-se ao índice 0 do array referente a propriedade "elenco" do objeto "filme".

no segundo console.log será exibido o nome da atriz "Virginia Cavendish", pois o mesmo refere-se ao último  índice do array referente a propriedade "elenco" do objeto "filme".

no terceiro console.log será exibido o canal e o horário em que o filme será transmitido (canal: Globo, horário 14h), pois foi acessado no console a propriedade que está armazendada pelo índice 2 do array que por sua vez está armazenado na propriedade "transmissoesHoje" do objeto "filme".
*/

// ----------| Exercício 02 |----------

/*
// item (a):

em "console.log(cachorro)", será impresso o objeto com as seguintes propriedades:
nome: Juca
idade: 3
raca: SRD

em "console.log(gato)", será impresso o objeto com as seguintes propriedades:
nome: Juba
idade: 3
raca: SRD

em "console.log(tartaruga)", será impresso o objeto com as seguintes propriedades:
nome: Jubo
idade: 3
raca: SRD

// item (b):

a sintaxe dos três pontos antes do nome de um objeto ("...") copia todo o conteúdo do objeto ao qual está se referindo e armazena em uma variável, se determinada pelo desenvolvedor do código
*/

// ----------| Exercício 03 |----------

/*
// item (a):

no primeiro console.log, será impresso o booleano "false", indicando a informação guardada na priopriedade "backender" do objeto "pessoa".
no segundo coonsole.log, será impresso "undefined" pois não existe a propriedade "altura" definida dentro do objeto "pessoa".

// item (b):

foi impresso como resultado "undefined" pois não existe a propriedade "altura" definida dentro do objeto "pessoa".
*/

////////////////////        Exercícios de Escrita de Código         ////////////////////

// ----------| Código 01 |----------

// item (a):

/*
const pessoa = {
    nome: 'Francisco',
    apelidos: ['Chico', 'Chiquinho', 'Chicoso']
}

function apresentacao(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
}

apresentacao(pessoa)

// item (b):

const novosApelidos = {
    ...pessoa
}

novosApelidos.apelidos = ['Chicão', 'Chiclete', 'Chikorita (aquele pokémon)']

apresentacao(novosApelidos)
*/

// ----------| Código 02 |----------

// item (a):
/*
const ficha1 = {
    nome: 'Fulano da Silva',
    idade: 34,
    profissao: 'Dev Front-end'
}

const ficha2 = {
    nome: 'Beltrano de Souza',
    idade: 31,
    profissao: 'Dev Full-stack'
}

// item (b):

function imprimirDados(objeto) {
    const array = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    console.log(array)
    return array
}

imprimirDados(ficha1)
imprimirDados(ficha2)
*/

// ----------| Código 03 |----------

/*
// item (a):

let carrinho = []

// item (b):

const fruta1 = {
    nome: 'Morango',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Abacaxi',
    disponibilidade: true
}

const fruta3 = {
    nome: 'Uva',
    disponibilidade: true
}

// item (c):

function adicionar(objeto1, objeto2, objeto3) {
    carrinho.push(objeto1, objeto2, objeto3)
    return carrinho
}

// item (d):

adicionar(fruta1, fruta2, fruta3)
console.log(carrinho)
*/

////////////////////      Fim do exercício do dia 21/06/2021     ////////////////////

