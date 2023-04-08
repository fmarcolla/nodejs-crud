import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";
import { TypeormVideoRepository } from "../repositories/typeorm/TypeormVideoRepository";

export class CreateVideoController {
    async handle(request: Request, reponse: Response){
        const { name, description, duration, category_id } = request.body;

        if(!name || !description){
            return reponse.status(400).json('Campos inválidos');
        }

        const videoRepo = new TypeormVideoRepository();
        const categoryRepo = new TypeormCategoryRepository();
        const service = new CreateVideoService(videoRepo, categoryRepo);
        
        const result = await service.execute({ name, description, duration, category_id });

        if(result instanceof Error){
            return reponse.status(400).json(result.message);
        }

        return reponse.json(result);
    }
}
