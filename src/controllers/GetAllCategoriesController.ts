import { Request, Response } from "express";
import { GetAllCAtegoriesService } from "../services/GetAllCategoriesService";

export class GetAllCAtegoriesController {
    async handle(request: Request, reponse: Response){
        const service = new GetAllCAtegoriesService();
        
        const categories = await service.execute();

        return reponse.json(categories);
    }
}
