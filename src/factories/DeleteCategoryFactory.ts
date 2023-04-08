import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export const DeleteCategoryFactory = () => {
    const categoryRepository = new TypeormCategoryRepository();
    const deleteCategoryService = new DeleteCategoryService(categoryRepository);
    const deleteCategoryController = new DeleteCategoryController(deleteCategoryService);

    return deleteCategoryController;
};