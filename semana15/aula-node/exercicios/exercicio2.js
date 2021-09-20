// EXERCICIO 02

const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

if (operacao !== undefined) {

    switch (operacao) {
        case 'somar':
            const soma = numero1 + numero2
            console.log(`O resultado da soma ${numero1} + ${numero2} é ${soma}`)
            break
        case 'subtrair':
            const subtracao = numero1 - numero2
            console.log(`O resultado da subtração ${numero1} - ${numero2} é ${subtracao}`)
            break
        case 'multiplicar':
            const multiplicacao = numero1 * numero2
            console.log(`O resultado da multiplicação ${numero1} x ${numero2} é ${multiplicacao}`)
            break
        case 'dividir':
            const divisao = numero1 / numero2
            console.log(`O resultado da divisão ${numero1} / ${numero2} é ${divisao}`)
            break
        default:
            console.log(`
            Por enquanto eu só consigo realizar as operações "somar", "subtrair", "multiplicar" e "dividir". 
            Verifique se você digitou corretamente uma dessas opções antes de inserir os números e tente novamente.`)
    }

} else {
    console.log(`
    Verifique se você passou como parâmetros:
    
    1) uma das quatro operações disponíveis (somar, subtrair, multiplicar ou dividir) 
    2) primeiro numero que deseja operar
    3) segundo numero que deseja operar

    Feito isso, tente novamente!`)
}