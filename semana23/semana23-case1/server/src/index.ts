import express, { Request, Response } from "express";
import cors from "cors";
import { database, deleteRegister } from "./database";
import { idCounter, getConteinerNum } from "./functions";

const app = express()
const port: Number = 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

type PostForm = {
    id: Number,
    client: String,
    transporter: String,
    totalCargoValue: Number,
    conteinerNum: String,
    country: String,
    conteinerType: Number,
    conteinerStatus: String,
    finality: String,
    operation: String,
    dateInitial: String,
    dateFinish: String
}

app.get("/all-registers", (req: Request, res: Response) => {
    res.send(database)
})

app.delete("/all-registers/:id", (req: Request, res: Response) => {
    const idConteiner = Number(req.params.id)
    deleteRegister(idConteiner)
    res.send(`O registro desse Conteiner foi deletado da base de dados.`)
})

app.post("/new-register", (req: Request, res: Response) => {

    const num = idCounter()
    const newId = num
    const newConteinerNum = getConteinerNum(num)
    const typedTotalCargoValue: Number = Number(req.body.totalCargoValue)
    const typedConteinerType: Number = Number(req.body.conteinerType)

    const formValues: PostForm = {
        id: newId,
        conteinerNum: newConteinerNum,
        client: req.body.client,
        transporter: req.body.transporter,
        totalCargoValue: typedTotalCargoValue,
        country: req.body.country,
        conteinerType: typedConteinerType,
        conteinerStatus: req.body.conteinerStatus,
        finality: req.body.finality,
        operation: req.body.operation,
        dateInitial: req.body.dateInitial,
        dateFinish: req.body.dateFinish
    }

    database.push(formValues)

    console.log(database)

    res.status(200)
    res.send(
        `
            <h1>CONFIRMAÇÃO</h1>
            <hr/><br/>
            <h3>Novo registro criado com sucesso!</h3>
            <h3>Você já pode fechar essa guia.</h3>
            `
    )
})

app.listen(port, () => {
    console.log(`
    Servidor em execução.
    "http://localhost:${port}"
    `)
})