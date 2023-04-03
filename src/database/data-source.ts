import "reflect-metadata"; 
import { DataSource } from "typeorm";
import { CreateCategories1680458581269 } from './migrations/1680458581269-CreateCategories';
import { CreateVideo1680474754667 } from './migrations/1680474754667-CreateVideo';
import { Category } from '../entities/Category';
import { Video } from '../entities/Video';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Category, Video],
    synchronize: true,
    logging: false,
    migrations: [CreateCategories1680458581269, CreateVideo1680474754667]
});