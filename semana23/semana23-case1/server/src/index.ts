import express, { Request, Response } from "express";
import cors from "cors";
import { dataBase } from "./data";

const app = express()
const port: Number = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/new-register", (req: Request, res: Response) => {
    const formParams = req.body

    res.send(
        `
        <h1>CONFIRMAÇÃO</h1>
        <br/>
        <div>Novo registro criado com sucesso! </div>
        <div> Você já pode fechar essa guia.</div>
        `
    )

    dataBase.push(formParams)

    console.log(dataBase)
})

app.listen(port, () => {
    console.log(`
    Servidor em execução.
    "http://localhost:${port}"
    `)
})