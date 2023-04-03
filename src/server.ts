import "reflect-metadata"; 
import express from "express";
import { AppDataSource } from './database/data-source';
import { routes } from "./routes"

const app = express();
app.use(express.json());
app.use(routes);

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => console.log("Server is running")); 
    })
    .catch((error) => console.log(error))