import { Request, Response } from "express";
import { GetAllCAtegoriesService } from "../services/GetAllCategoriesService";
import { TypeormCategoryRepository } from "../repositories/typeorm/TypeormCategoryRepository";

export class GetAllCAtegoriesController {
    async handle(request: Request, reponse: Response){
        const categoryRepo = new TypeormCategoryRepository();
        const service = new GetAllCAtegoriesService(categoryRepo);
        
        const categories = await service.execute();

        return reponse.json(categories);
    }
}
