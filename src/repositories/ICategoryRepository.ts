
import { Category } from "../entities/Category";

interface ICategoryRepository {
    create(category: Category): Promise<Category>;
    update(category: Category): Promise<Category>;
    findByName(name: string): Promise<Category>;
    findById(id: number): Promise<Category>;
    delete(id: number);
    findAll(): Promise<Category[]>;
}

export { ICategoryRepository };