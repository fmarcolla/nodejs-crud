import { Request, Response, response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";
export class UpdateCategoryController {
    async handle(request: Request, reponse: Response){
        const { id } = request.params;
        const { name, description } = request.body;
        const parseID = +id;
        
        const categoryRepo = new TypeormCategoryRepository();
        const service = new UpdateCategoryService(categoryRepo);
        const result = await service.execute({id: parseID, name, description});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        
        return reponse.json(result);
    }
}
