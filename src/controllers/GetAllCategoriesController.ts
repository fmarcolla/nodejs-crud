import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
    constructor(private getAllCategoriesService: GetAllCategoriesService){}

    async handle(request: Request, reponse: Response){
        const categories = await this.getAllCategoriesService.execute();

        return reponse.json(categories);
    }
}
