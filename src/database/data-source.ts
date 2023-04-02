import "reflect-metadata"; 
import { DataSource } from "typeorm";
import { CreateCategories1680458581269 } from './migrations/1680458581269-CreateCategories';
import { CreateVideo1680474754667 } from './migrations/1680474754667-CreateVideo';
import { Category } from '../entities/Category';
import { Video } from '../entities/Video';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "gdplace",
    password: "gdplace%2021",
    database: "node_crud",
    entities: [Category, Video],
    synchronize: true,
    logging: false,
    migrations: [CreateCategories1680458581269, CreateVideo1680474754667]
});