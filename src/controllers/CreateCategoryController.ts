import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";

export class CreateCategoryController {
    async handle(request: Request, reponse: Response){
        const { name, description } = request.body;

        if(!name || !description){
            return reponse.status(400).json('Campos inválidos');
        }

        const categoryRepo = new TypeormCategoryRepository();
        const service = new CreateCategoryService(categoryRepo);
        
        const result = await service.execute({ name, description });

        if(result instanceof Error){
            return reponse.status(400).json(result.message);
        }

        return reponse.json(result);
    }
}
