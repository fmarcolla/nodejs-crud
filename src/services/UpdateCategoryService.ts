import { Category } from "../entities/Category";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

type CategoryUdpateRequest = {
    id: number,
    name: string;
    description: string
}

export class UpdateCategoryService {
    constructor(private categoryRepository: ICategoryRepository){}

    async execute({ id, name, description }: CategoryUdpateRequest): Promise<Category | Error>{
        const category = await this.categoryRepository.findById(id);

        if(!category){
            return new Error("Category does not exists!");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await this.categoryRepository.update(category);

        return category;
    }
}