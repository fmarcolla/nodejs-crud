import { Repository } from 'typeorm';
import { AppDataSource } from '../../database/data-source';
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../ICategoryRepository";

class TypeormCategoryRepository implements ICategoryRepository {
    private repo: Repository<Category>;
    
    constructor(){
        this.repo = AppDataSource.getRepository(Category);
    }

    async create({ name, description }: Category): Promise<Category>{
        const category = this.repo.create({
            name,
            description 
         });
 
         await this.repo.save(category);
 
         return category;
    }

    async update(category: Category): Promise<Category>{
         await this.repo.save(category);
         
         return category;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repo.findOneBy({ name });
        
        return category;
    }

    async findById(id: number): Promise<Category> {
        const category = await this.repo.findOne({where: {id: id}});
        
        return category;
    }

    async delete(id: number){
        await this.repo.delete(id);
    }

    async findAll(): Promise<Category[]> {
        const categories = await this.repo.find();
        return categories;
    }
}

export { TypeormCategoryRepository };