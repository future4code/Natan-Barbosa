// EXERCICIO 01 -------------------------------

// (A) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

const minhaString: string = "21"

// RESPOSTA): ocorre um erro de sintaxe, uma vez que o tipo number não é atribuível a uma variável que ja foi previamente tipada para ser do tipo string

// --------------------------------------------

// (B) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

const meuNumero: number | string = "Labenu"

// RESPOSTA): após definir um tipo para essa variável, para difinir mais tipos, usa-se o union type |

// --------------------------------------------

// (C) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// - nome, que é uma string;
// - idade, que é um número;
// - corFavorita, que é uma string.
// Depois, crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// RESPOSTA):

// const primeiraPessoa: {nome: string, idade: number, corFavorita: string} = {
//     nome: "Natan",
//     idade: 22,
//     corFavorita: "Azul"
// }

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const primeiraPessoa: pessoa = {
    nome: "Natan",
    idade: 22,
    corFavorita: "Azul"
}

const segundaPessoa: pessoa = {
    nome: "Kelle",
    idade: 50,
    corFavorita: "Rosa"
}

const terceiraPessoa: pessoa = {
    nome: "João",
    idade: 55,
    corFavorita: "Verde"
}

const quartaPessoa: pessoa = {
    nome: "Otávio",
    idade: 12,
    corFavorita: "Vermelho"
}

// (D) Modifique o tipo de um objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` para isso.

enum coresPadrao {
    AMARELO = "#e7eb09",
    ANIL = "#1e3d8f",
    AZUL = "#1f7ab7",
    LARANJA = "#ff6200",
    VERDE = "#06cf10",
    VERMELHO = "#cf0606",
}

type tiposParaCores = {
    cor: coresPadrao,
}

const coresArcoIris: tiposParaCores = {
    cor: coresPadrao.ANIL
} 