import { UpdateCategoryController } from "../controllers/UpdateCategoryController";
import { UpdateCategoryService } from "../services/UpdateCategoryService";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";

export const UpdateCategoryFactory = () => {
    const categoryRepository = new TypeormCategoryRepository();
    const updateCategoryService = new UpdateCategoryService(categoryRepository);
    const updateCategoryController = new UpdateCategoryController(updateCategoryService);

    return updateCategoryController;
};