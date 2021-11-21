import express, { Request, Response } from "express";
import cors from "cors";
import { dbTemporary } from "./dbTemporary";
import { dbConnection } from "./dbConnection";
import { idCounter, getConteinerNum } from "./test";

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

const throwNewError = (error: any): any => {
    throw {
        errorId: error.name,
        errorLog: error.message
    }
}

// funcoes

app.post("/new-register", (req: Request, res: Response) => {
    try {
        const typedTotalCargoValue: Number = Number(req.body.totalCargoValue)
        const typedConteinerType: Number = Number(req.body.conteinerType)
        const formValues: PostForm = req.body
        formValues.totalCargoValue = typedTotalCargoValue
        formValues.conteinerType = typedConteinerType

        let order: Number = idCounter()

        dbConnection.raw(`
            INSERT INTO all-conteiners (id, client, transporter, totalCargoValue, conteinerNum, country, conteinerType, conteinerStatus, finality, operation, dateInitial, dateFinish)
            VALUES ( ${order}, "${req.body.client}", "${req.body.transporter}", ${req.body.totalCargoValue}, "${getConteinerNum(order)}", "${req.body.country}", ${req.body.conteinerType}, "${req.body.conteinerStatus}", "${req.body.finality}", "${req.body.operation}", "${req.body.dateInitial}", "${req.body.dateFinish}");
        `)

        res.status(200)
        res.send(
            `
            <h1>CONFIRMAÇÃO</h1>
            <br/>
            <div>Novo registro criado com sucesso! </div>
            <div> Você já pode fechar essa guia.</div>
            `
        )

        dbTemporary.push(formValues)
    } catch (error) {
        throwNewError(error)
    }

    console.log(dbTemporary)
})

app.listen(port, () => {
    console.log(`
    Servidor em execução.
    "http://localhost:${port}"
    `)
})