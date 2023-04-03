import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCAtegoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { GetAllVIdeosController } from "./controllers/GetAllVIdeosController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCAtegoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVIdeosController().handle);

export { routes };