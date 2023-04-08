import { AppDataSource } from '../database/data-source';
import { Category } from "../entities/Category";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

export class DeleteCategoryService {
    constructor(private categoryRepository: ICategoryRepository){}

    async execute(id: number): Promise<Category[] | Error>{

        const category = await this.categoryRepository.findById(id);

        if(!category){
            return new Error("Category does not exists!");
        }

        await this.categoryRepository.delete(id);
    }
}