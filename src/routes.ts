import { Router } from "express";

import { CreateVideoFactory } from "./factories/CreateVideoFactory";
import { UpdateCategoryFactory } from "./factories/UpdateCategoryFactory";
import { GetAllVideoFactory } from "./factories/GetAllVideoFactory";
import { DeleteCategoryFactory } from "./factories/DeleteCategoryFactory";
import { GetAllCategoryFactory } from "./factories/GetAllCategoryFactory";
import { CreateCategoryFactory } from "./factories/CreateCategoryFactory";

const routes = Router();

routes.post("/categories", (request, reponse) => CreateCategoryFactory().handle(request, reponse));
routes.put("/categories/:id", (request, reponse) => UpdateCategoryFactory().handle(request, reponse));
routes.get("/categories", (request, reponse) => GetAllCategoryFactory().handle(request, reponse));
routes.delete("/categories/:id", (request, reponse) => DeleteCategoryFactory().handle(request, reponse));

routes.post("/videos", (request, reponse) => CreateVideoFactory().handle(request, reponse));
routes.get("/videos", (request, reponse) => GetAllVideoFactory().handle(request, reponse));

export { routes };