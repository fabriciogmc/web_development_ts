import "reflect-metadata"
import { DataSource } from "typeorm"
import { Projeto} from "./models/Projeto"

export const MariaDBDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "teste_typeorm",
    synchronize: true,
    logging: false,
    entities: [Projeto],
    migrations: [],
    subscribers: [],
})




