import { Category } from "../entities/Category";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

export class GetAllCAtegoriesService {
    constructor(private categoryRepository: ICategoryRepository){}

    async execute(): Promise<Category[] | Error>{
        const categories = await this.categoryRepository.findAll();

        return categories;
    }
}