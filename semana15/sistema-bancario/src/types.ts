export type Transaction = {
    value: number,
    date: Date,
    description: string
}

export type Account = {
    name: string,
    cpf: string,
    date: Date,
    balance: number,
    statement: Transaction[]
}