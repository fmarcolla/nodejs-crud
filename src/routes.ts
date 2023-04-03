import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCAtegoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCAtegoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

export { routes };