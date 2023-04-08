import { AppDataSource } from '../../database/data-source';
import { Category } from "../../entities/Category";
import { ICategoryRepositories } from "../ICategoryRepositories";

class TypeormCategoryRepository implements ICategoryRepositories {
    async create({ name, description }: Category): Promise<Category>{
        const repo = AppDataSource.getRepository(Category);

        const category = repo.create({
            name,
            description 
         });
 
         await repo.save(category);
 
         return category;
    }

    async findByName(name: string): Promise<boolean> {
        const repo = AppDataSource.getRepository(Category);
        const category = await repo.findOneBy({ name });
        
        return !!category;
    }

    async findById(id: number): Promise<boolean> {
        const repo = AppDataSource.getRepository(Category);
        const category = await repo.findOne({where: {id: id}});
        
        return !!category;
    }
}

export { TypeormCategoryRepository };