// EXERCICIO 02

// Observe a função a seguir, escrita em JavaScript:

/*

function obterEstatisticas(numeros) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

*/

// (A). Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

// (B). Que outras variáveis compõem essa função? Explicite a tipagem de todas elas

type typeEstatisticas = {
    maior: number,
    menor: number,
    media: number,
}

function obterEstatisticas(numeros: number[]): typeEstatisticas {

    const numerosOrdenados = numeros.sort((a, b) => a - b)

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: (soma / numeros.length)
    }

    return estatisticas
}


// (C). Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => typeEstatisticas
}

const amostraDeIdades: AmostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}