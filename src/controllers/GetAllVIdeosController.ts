import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";
export class GetAllVIdeosController {
    constructor(private getAllVideosService: GetAllVideosService){}

    async handle(request: Request, reponse: Response){
        const videos = await this.getAllVideosService.execute();

        return reponse.json(videos);
    }
}
