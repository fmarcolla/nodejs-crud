import "reflect-metadata"; 
import { DataSource, DatabaseType } from "typeorm";
import { CreateCategories1680458581269 } from './migrations/1680458581269-CreateCategories';
import { CreateVideo1680474754667 } from './migrations/1680474754667-CreateVideo';
import { Category } from '../entities/Category';
import { Video } from '../entities/Video';
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + "/../entities/*{.js,.ts}"],
    synchronize: true,
    logging: false,
    migrations: [CreateCategories1680458581269, CreateVideo1680474754667]
});

const InitDatabase = async () => {
    await AppDataSource.initialize()
    .then(() => {
        console.log("database is runnnig!") 
    })
    .catch((error) => console.log(error));
}

export { AppDataSource, InitDatabase}