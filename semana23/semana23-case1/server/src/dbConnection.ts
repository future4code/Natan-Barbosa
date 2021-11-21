import knex from "knex";

export const dbConnection = knex({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "23nbb!@#MySQL-natan",
        database: "local-connection",
        multipleStatements: true
    }
})