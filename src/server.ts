import { app } from "./app";
import { InitDatabase } from './database/data-source';
import { AppDataSource } from "./database/config";

InitDatabase(AppDataSource);

app.listen(3000, () => console.log("Server is running"));

