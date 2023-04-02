import "reflect-metadata"; 
import express from "express";
import { AppDataSource } from './database/data-source';

const app = express();

AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => console.log("Server is running")); 
    })
    .catch((error) => console.log(error))