import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";

export const CreateCategoryFactory = () => {
    const categoryRepository = new TypeormCategoryRepository();
    const createCategoryService = new CreateCategoryService(categoryRepository);
    const createCategoryController = new CreateCategoryController(createCategoryService);

    return createCategoryController;
};