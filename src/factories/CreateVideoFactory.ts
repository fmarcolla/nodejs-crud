import { CreateVideoController } from "../controllers/CreateVideoController";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";
import { TypeormVideoRepository } from "../repositories/typeorm/TypeormVideoRepository";
import { CreateVideoService } from "../services/CreateVideoService";

export const CreateVideoFactory = () => {
    const videoRepository = new TypeormVideoRepository();
    const categoryRepository = new TypeormCategoryRepository();
    const createVideoService = new CreateVideoService(videoRepository, categoryRepository);
    const createVideoController = new CreateVideoController(createVideoService);

    return createVideoController;
};