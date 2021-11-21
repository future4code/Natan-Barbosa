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

export const database: PostForm[] = [
    {
        id: 1,
        conteinerNum: 'CONT1000001',
        client: 'PSalt Industries Ltd.',
        transporter: 'Expo Porto LTDA',
        totalCargoValue: 150000,
        country: 'Africa do Sul',
        conteinerType: 20,
        conteinerStatus: 'full',
        finality: "export",
        operation: "scanner",
        dateInitial: "2021-11-22",
        dateFinish: "2021-11-30"
    },
    {
        id: 2,
        conteinerNum: 'CONT1000002',
        client: 'Petronorth Inc.',
        transporter: 'American Marine LLC',
        totalCargoValue: 225500,
        country: 'Estados Unidos',
        conteinerType: 40,
        conteinerStatus: 'full',
        finality: "import",
        operation: "descarga",
        dateInitial: "2021-11-23",
        dateFinish: "2021-11-28"
    },
    {
        id: 3,
        conteinerNum: 'CONT1000003',
        client: 'AZ Commodities S.A.',
        transporter: 'Alpha Shipping Corp.',
        totalCargoValue: 40000,
        country: 'Portugal',
        conteinerType: 20,
        conteinerStatus: 'empty',
        finality: "import",
        operation: "embarque",
        dateInitial: "2021-11-22",
        dateFinish: "2021-11-27"
    },
]

export const deleteRegister = (id: Number): any => {
    const item = Number(id) - 1
    const register = database[item]
    delete database[item]
    return register
}