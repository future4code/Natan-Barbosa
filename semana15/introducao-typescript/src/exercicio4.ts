// EXERCICIO 04

// A) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do arquivo typescript com o código abaixo?

type pokemon = {
    name: string,
    types: string, healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// Resposta): para gerar um javascript a partir desse arquivo basta rodar o comando {tsc exercicio4.ts} dentro da pasta onde se encontra o arquivo typescript

// (B) E se este arquivo estivesse dentro de uma pasta chamada src . O processo seria diferente? Se sim, descreva as diferenças.

// Resposta): primeiro configuraria no tsconfig.json a saida do arquivo javascript para dentro de uma pasta build.Através do arquivo package.json, criaria um script para executar o comando {tsc && node ./build/exercicio4.js} que faz a transpilação e roda o arquivo em um mesmo comando

// (C) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// Resposta): Basta configurar um script para transpilar todos os arquivos que encontrar na pasta {cd src && tsc} ou somente alguns arquivos informando o nome de cada um no script