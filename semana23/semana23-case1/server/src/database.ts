type PostForm = {
    id: Number,
    conteinerNum: String,
    client: String,
    transporter: String,
    totalCargoValue: Number,
    country: String,
    conteinerType: Number,
    conteinerStatus: String,
    finality: String,
    operation: String,
    dateInitial: String,
    dateFinish: String
}

export const database: PostForm[]  = []