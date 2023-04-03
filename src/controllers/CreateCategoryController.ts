import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, reponse: Response){
        const { name, description } = request.body;

        if(!name || !description){
            return reponse.status(400).json('Campos inválidos');
        }

        const service = new CreateCategoryService();
        
        const result = await service.execute({ name, description });

        if(result instanceof Error){
            return reponse.status(400).json(result.message);
        }

        return reponse.json(result);
    }
}
