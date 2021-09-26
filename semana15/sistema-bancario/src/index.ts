import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";



const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log(`O servidor TÁ ON na porta 3003`)
})

