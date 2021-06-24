// EXERCÍCIOS DO DIA 24/06/2021 - CALLBACK E FUNÇOES DE ARRAYS
// NATAN BENFICA BARBOSA - LABENU, TURMA LOVELACE

// ---------- Exercícios de Interpretação de Código ----------

// ---------- Interpretação 01 ----------
// essa função irá executar a sintaxe map que irá percorrer e mapear cada um dos elementos do array 'usuários' observando os argumentos da função. A cada novo elemento desse array, a função irá mapear no console log, respectivamente, o item que está guardado no array, o seu índex (indice de ordenamento ao qual se refere) e por fim irá imprimir o próprio array ao qual pertence. Lembrando que todas essas informações são impressas em uma mesma linha do console, e assim sucessivamente para cada elemento até o final do array.

// ---------- Interpretação 02 ----------
// diferentemente do exercício 01, nesse exercício 02, além de percorrer e mapear os elementos do array conforme os argumentos, a função irá retornar para a variável um novo array concebido pela sintaxe map onde estarão armazenados apenas o nome de cada um dos usuários presentes no array original, conforme instruções.

// ---------- Interpretação 03 ----------
// essa função irá guardar em um novo array, todos os objetos que não possui o apelido 'Chijo'. Dessa forma a sintaxe filter se encarrega de armazenar os objetos em um novo array quando a condição for true.

// ---------- Exercícios de Escrita de Código ----------

// ---------- Escrita 01 ----------

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// item a):

const nomeDosPets = pets.map((array) => {
    return array.nome
})
console.log(nomeDosPets)

// item b):

const doguinhosSalsicha = pets.filter((array) => {
    return array.raca === "Salsicha"
})
console.log(doguinhosSalsicha)

// item c):

const poodles = pets.filter((array) => {
    return array.raca === "Poodle"
})
const mensagemDeDesconto = poodles.map((array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${array.nome}!`
})
console.log(mensagemDeDesconto)


// ---------- Escrita 02 ----------

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// item a):

const novoArrayProdutos = produtos.map((array) => {
    return array.nome
})
console.log(novoArrayProdutos)

// item b):

const novoArrayComDesconto = produtos.map((objetos) => {
    let novosObjetos = {...objetos}
    novosObjetos.preco = objetos.preco * 0.95
    delete novosObjetos.categoria
    return novosObjetos
})
console.log(novoArrayComDesconto)

// item c):

const arrayDeBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log(arrayDeBebidas)

// item d):

const arrayProdutosYpe = produtos.filter((produto) => {
    return produto.nome.includes('Ypê')
})
console.log(arrayProdutosYpe)

// item e):

const produtosYpe = produtos.filter((produto) => {
    const produtosComYpe = produto.nome.includes('Ypê')
    return produtosComYpe
})
const imprimirMensagemYpe = produtosYpe.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})
console.log(imprimirMensagemYpe)

////////////////////////////////////// FIM DOS EXERCÍCIOS DO DIA 24/06/2021 ///////////////////////////////////