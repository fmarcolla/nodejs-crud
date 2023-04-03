import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVIdeosController {
    async handle(request: Request, reponse: Response){
        const service = new GetAllVideosService();
        
        const videos = await service.execute();

        return reponse.json(videos);
    }
}
