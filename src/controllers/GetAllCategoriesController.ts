import { Request, Response } from "express";
import { GetAllCAtegoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
    constructor(private getAllCAtegoriesService: GetAllCAtegoriesService){}

    async handle(request: Request, reponse: Response){
        const categories = await this.getAllCAtegoriesService.execute();

        return reponse.json(categories);
    }
}
