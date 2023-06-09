import { Request, Response, response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";
export class UpdateCategoryController {
    constructor(private updateCategoryService: UpdateCategoryService){}

    async handle(request: Request, reponse: Response){
        const { id } = request.params;
        const { name, description } = request.body;
        const parseID = +id;
        
        const result = await this.updateCategoryService.execute({id: parseID, name, description});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        
        return reponse.json(result);
    }
}
