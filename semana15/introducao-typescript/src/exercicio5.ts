const calcularOperacoes = (num1: number, num2: number): void => {

    let maior = num1
    let menor = num2
    let igualdade = "Os dois números inseridos na função são iguais"
    let comparacao = `O maior número é o ${maior}`

    if (num1 > num2) {
        maior = num1
        menor = num2
    } else if (num2 > num1) {
        maior = num2
        menor = num1
    } else {
        igualdade
    }

    const soma = maior + menor
    const subtracao = maior - menor
    const multiplicacao = maior * menor
    
    const exibirMensagem = () => {
        if (num1 === num2) {
            return igualdade
        } else {
            return comparacao
        }
    }

    console.log(`
    Números: ${num1} e ${num2}

    Soma: ${num1} + ${num2} = ${soma}
    Subtração: ${num1} - ${num2} = ${subtracao}
    Multiplicação: ${num1} x ${num2} = ${multiplicacao}
    ${exibirMensagem()}

    `)
}

const numero1 = Number(process.argv[2])
const numero2 = Number(process.argv[3])

calcularOperacoes(numero1, numero2)