import { AppDataSource } from '../database/data-source';
import { Category } from "../entities/Category";

export class GetAllCAtegoriesService {
    async execute(): Promise<Category[] | Error>{
        const repo = AppDataSource.getRepository(Category);

        const categories = await repo.find();

        return categories;
    }
}