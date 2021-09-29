// EXERCICIO 03
let tarefas = ['lavar a louça', 'comprar leite']
let novaTarefa = process.argv[2]
tarefas.push(novaTarefa)

console.log('Tarefa adicionada com sucesso!')
console.table(tarefas)