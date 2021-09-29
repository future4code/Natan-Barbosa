import express from 'express' // import do express
import cors from 'cors' // import do cors

// configuracoes do express

const app = express() // armazenar o express em uma const pra usar o objeto desse método express que está sendo chamado

app.use(express.json()) // serviço/middleware que converte o body das respostas de requisições em formato .json
app.use(cors()) // serviço/middleware que evita o erro de cors

app.listen(3005, () => { // servidor sendo executado na porta indicada
    console.log(`O servidor está sendo rodado no endereço http://localhost:3005`)
})