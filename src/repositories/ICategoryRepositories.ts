
import { Category } from "../entities/Category";

interface ICategoryRepositories {
    create(category: Category): Promise<Category>;
    findByName(name: string): Promise<boolean>;
    findById(id: number): Promise<boolean>;
}

export { ICategoryRepositories };