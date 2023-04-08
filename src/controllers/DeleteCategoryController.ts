import { Request, response, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController {
    constructor(private deleteCategoryService: DeleteCategoryService){}
    
    async handle(request: Request, reponse: Response){
        const { id } = request.params;
        
        const result = await this.deleteCategoryService.execute(+id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        
        return reponse.status(204).end();
    }
}
