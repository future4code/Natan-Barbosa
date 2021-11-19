type NewRegister = {
    category: String,
    client: String,
    transporter: String,
    country: String,
    conteinerType: String, 
    conteinerStatus: String,
    operation: String,
    dateInitial: String,
    hourInitial: String,
    dateFinish: String,
    hourFinish: String
}

export const dataBase: NewRegister[]  = []