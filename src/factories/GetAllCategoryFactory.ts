import { GetAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export const GetAllCategoryFactory = () => {
    const categoryRepository = new TypeormCategoryRepository();
    const getAllCategoriesService = new GetAllCategoriesService(categoryRepository);
    const gettAllCategoriesController = new GetAllCategoriesController(getAllCategoriesService);

    return gettAllCategoriesController;
};