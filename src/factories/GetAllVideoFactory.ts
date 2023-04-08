import { GetAllVIdeosController } from "../controllers/GetAllVIdeosController";
import { TypeormVideoRepository } from "../repositories/typeorm/TypeormVideoRepository";
import { GetAllVideosService } from "../services/GetAllVideosService";

export const GetAllVideoFactory = () => {
    const videoRepository = new TypeormVideoRepository();
    const getAllVideosService = new GetAllVideosService(videoRepository);
    const getAllvideosController = new GetAllVIdeosController(getAllVideosService);

    return getAllvideosController;
};