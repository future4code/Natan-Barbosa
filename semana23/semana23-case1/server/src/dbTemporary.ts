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

export const dbTemporary: PostForm[]  = []