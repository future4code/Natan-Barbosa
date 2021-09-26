import express from "express";
import { Request } from "express";
import { Response } from "express";
import { Express } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log(`O servidor TÁ ON na porta 3003`)
})

app.post("/users/create", (req: Request, res: Response) => {

    try {
        const { name, cpf, dateAsString } = req.body
        const [day, month, age] = dateAsString.split("/")
        const date: Date = new Date(`${age}-${month}-${day}`)

        accounts.push({
            name: name,
            cpf: cpf,
            date: date,
            balance: 0,
            statement: [],
        })

        res.status(201).send("Conta criada.")
    } catch (error: any) {

        console.log(error)
        res.status(400).send(error.message)

    }
})


app.get("/users/all", (req: Request, res: Response) => {
    try {
        if (!accounts.length) {
            res.statusCode = 404
            throw new Error("Não encontrei nenhuma conta")
        }

        res.status(200).send(accounts)

    } catch (error: any) {
        res.status(400).send(error.message)

    }

})