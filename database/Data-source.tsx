import "reflect-metadata"
import { DataSource } from "typeorm"
import { Cachorro } from "../model/Cachorro"

const versao=1

export const AppDataSource = new DataSource({
    type: "expo",
    driver: require('expo-sqlite'),
    database: "cachorroapp"+{versao}+".db",
    synchronize: false,
    logging: false,
    entities: [Cachorro],
    migrations: [],
    subscribers: [],
})






