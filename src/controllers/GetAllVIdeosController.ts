import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";
import { TypeormVideoRepository } from "../repositories/typeorm/TypeormVideoRepository";

export class GetAllVIdeosController {
    async handle(request: Request, reponse: Response){
        const videoRepo = new TypeormVideoRepository();
        const service = new GetAllVideosService(videoRepo);
        
        const videos = await service.execute();

        return reponse.json(videos);
    }
}
