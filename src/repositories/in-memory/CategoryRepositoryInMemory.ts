import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../ICategoryRepository";
import { v4 as uuid } from "uuid";

class CategoryRepositoryInMemory implements ICategoryRepository {
    private categories: Category[] = [];
    
    async create(category: Category): Promise<Category>{
        Object.assign(category, {
            id: uuid(),
        });

        this.categories.push(category);
        return category;
    }

    async findById(id: number): Promise<Category> {
        const category = this.categories.find((category) => category.id === id);
        return category;
    }

    async findByName(name: string): Promise<Category> {
        const categories = this.categories.find((category) => category.name === name);
        return categories;
    }

    async delete(id: number){
        const categories = this.categories.filter((category) => category.id !== id);
        this.categories = categories;
    }

    async findAll(): Promise<Category[]> {
        return this.categories;
    }

    async update(updatedCategory: Category): Promise<Category>{
        this.delete(updatedCategory.id);
        const category = this.create(updatedCategory);
        
        return category;
    }
}

export { CategoryRepositoryInMemory };