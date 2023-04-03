import { AppDataSource } from '../database/data-source';
import { Category } from "../entities/Category";

type CategoryUdpateRequest = {
    id: number,
    name: string;
    description: string
}

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUdpateRequest): Promise<Category | Error>{
        const repo = AppDataSource.getRepository(Category);

        const category = await repo.findOne({where: {id}});

        if(!category){
            return new Error("Category does not exists!");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repo.save(category);

        return category;
    }
}