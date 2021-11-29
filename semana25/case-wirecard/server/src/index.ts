import express, { Request, Response } from "express";
import cors from "cors";
import { data, DataType } from "./server";
import { lastIdNum, getIdSequency } from "./server";

const app = express()
const port: Number = 3003

app.use(cors())
app.use(express.json())

app.get("/all-payments", (req: Request, res: Response) => {
    res.status(200)
    res.send(data)
})

app.post("/new-payment", (req: Request, res: Response) => {
    let id = lastIdNum

    const newPayment: DataType = {
        id: getIdSequency(id),
        buyerName: req.body.buyerName,
        buyerEmail: req.body.buyerEmail,
        buyerCPF: req.body.buyerCPF,
        pmtAmount: req.body.pmtAmount,
        pmtType: req.body.pmtType,
        pmtIsCard: req.body.pmtIsCard,
        cardHolderName: req.body.cardHolderName,
        cardNumber: req.body.cardNumber,
        cardExpDate: req.body.cardExpDate,
        cardCVV: req.body.cardCVV
    }

    data.push(newPayment)
    
    res.status(200)
    res.send("Novo pagamento registrado com sucesso.")
})

// --------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`
    The express server is running in: "http://localhost:${port}".
    `)
})