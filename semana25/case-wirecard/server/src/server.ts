export type DataType = {
    id: Number,
    buyerName: String,
    buyerEmail: String,
    buyerCPF: Number,
    pmtAmount: Number,
    pmtType: String,
    pmtIsCard: Boolean,
    cardHolderName: String | null,
    cardNumber: Number | null,
    cardExpDate: String | null,
    cardCVV: Number | null
}

export const data: DataType[] = [{
    id: 1,
    buyerName: "João Emanuel de Souza",
    buyerEmail: "joaoems1@gmail.com",
    buyerCPF: 53683409312,
    pmtAmount: 125.60,
    pmtType: "Boleto 14 Dias",
    pmtIsCard: false,
    cardHolderName: null,
    cardNumber: null,
    cardExpDate: null,
    cardCVV: null
}, {
    id: 2,
    buyerName: "Mônica Aparecida Santos",
    buyerEmail: "ap_smonica@hotmail.com",
    buyerCPF: 44378025868,
    pmtAmount: 389.90,
    pmtType: "Crédito Parc. 3x",
    pmtIsCard: true,
    cardHolderName: "MONICA A SANTOS",
    cardNumber: 5144382829558350,
    cardExpDate: "2028-09-29",
    cardCVV: 204
}]

export let lastIdNum: Number = 2
export const getIdSequency = (lastId: Number): Number => {
    const newId = Number(lastId) + 1
    lastIdNum = newId
    return newId
}