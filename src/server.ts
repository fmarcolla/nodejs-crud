import "reflect-metadata"; 
import { app } from "./app";
import { AppDataSource } from './database/data-source';


AppDataSource.initialize()
    .then(() => {
        app.listen(3000, () => console.log("Server is running")); 
    })
    .catch((error) => console.log(error))

