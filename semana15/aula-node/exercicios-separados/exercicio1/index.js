// EXERCICIO 01 

// ( A ). como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// (Res): uma vez inseridos na linha de comando, os parametros são capturados pelo código atravésa da sentença de código "process.argv[]" a partir do indice 2

// ( B ).

const chalk = require('chalk');
const logSucesso = (logTerminal) => console.log(chalk.green(logTerminal))
const logErro = (logTerminal) => console.log(chalk.red.bold(logTerminal))


const pessoa = {
    nome: process.argv[2],
    idade: {
        em2021: process.argv[3],
        em2028: Number(process.argv[3]) + 7
    }
}

const apresentacao = ` 
Oi ${pessoa.nome}! 
Você tem ${pessoa.idade.em2021} anos.
Daqui 7 anos, você terá ${pessoa.idade.em2028} anos.
`

if ((process.argv[2] === undefined) || (process.argv[3] === undefined)) {
    logErro(`Nesse exercício 1 você tem que rodar o comando: { npm run start 'seu-nome' 'sua-idade' }`)
} else {
    logSucesso(apresentacao)
}