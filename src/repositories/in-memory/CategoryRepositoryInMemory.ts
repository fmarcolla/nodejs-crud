import { Category } from "../../entities/Category";
import { ICategoryRepositories } from "../ICategoryRepositories";
import { v4 as uuid } from "uuid";

class CategoryRepositoryInMemory implements ICategoryRepositories {
    private categories: Category[] = [];
    
    async create(category: Category): Promise<Category>{
        Object.assign(category, {
            id: uuid(),
        });

        this.categories.push(category);
        return category;
    }

    async findById(id: number): Promise<boolean> {
        const video = this.categories.some((category) => category.id === id);
        return video;
    }

    async findByName(name: string): Promise<boolean> {
        const video = this.categories.some((category) => category.name === name);
        return video;
    }
}

export { CategoryRepositoryInMemory };