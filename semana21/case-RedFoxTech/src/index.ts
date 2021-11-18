import express, { Express } from 'express'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { AddressInfo } from "net";
import { v4 } from "uuid";
import * as bcrypt from "bcryptjs";

const app: Express = express();

app.use(cors());
app.use(express.json())

dotenv.config()

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    }
})

class IdGenerator {

    generateId(): string {
        return v4();
    }
}

class hashManager {

    async hash(s: string): Promise<string> {
        const cost = Number(process.env.BCRYPT_COST!);
        const salt = await bcrypt.genSalt(cost);
        const cypherText = await bcrypt.hash(s, salt);

        return cypherText;
    }

    async compare(plaintext: string, hash: string): Promise<boolean> {
        const hashCompare: boolean = await bcrypt.compare(plaintext, hash);
        return hashCompare;
    }
}





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});