import { Request, response, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(request: Request, reponse: Response){
        const { id } = request.params;

        const service = new DeleteCategoryService();
        
        const result = await service.execute(+id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        
        return reponse.status(204).end();
    }
}
