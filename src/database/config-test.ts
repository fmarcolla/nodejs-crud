import "reflect-metadata"; 
import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "node_crud_teste",
    entities: [__dirname + "/../entities/*{.js,.ts}"],
    synchronize: true,
    logging: false,
    migrations: [__dirname + "/../migrations/*{.js,.ts}"]
});

export { AppDataSource };