import { AppDataSource } from '../database/data-source';
import { Category } from "../entities/Category";

export class DeleteCategoryService {
    async execute(id: number): Promise<Category[] | Error>{
        const repo = AppDataSource.getRepository(Category);

        const category = await repo.findOne({where: {id}});

        if(!category){
            return new Error("Category does not exists!");
        }

        await repo.delete(id);
    }
}