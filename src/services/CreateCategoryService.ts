import { Category } from "../entities/Category";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

type CategoryRequest = {
    name: string;
    description: string
}

export class CreateCategoryService {
    constructor(private categoryRepository: ICategoryRepository){}

    async execute({ name, description }: CategoryRequest): Promise<Category | Error>{

        const existsCategory = await this.categoryRepository.findByName(name);

        if(existsCategory) {
            return new Error("Category already exists");
        }

        const category = await this.categoryRepository.create({
            name,
            description 
         });

        return category;
    }
}