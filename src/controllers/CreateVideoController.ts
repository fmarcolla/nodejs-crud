import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController {
    constructor(private createVideoService: CreateVideoService){}

    async handle(request: Request, reponse: Response){
        const { name, description, duration, category_id } = request.body;

        if(!name || !description){
            return reponse.status(400).json('Campos inválidos');
        }
        
        const result = await this.createVideoService.execute({ name, description, duration, category_id });

        if(result instanceof Error){
            return reponse.status(400).json(result.message);
        }

        return reponse.json(result);
    }
}
