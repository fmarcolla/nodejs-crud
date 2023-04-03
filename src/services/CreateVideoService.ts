import { AppDataSource } from '../database/data-source';
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
    name: string;
    description: string,
    duration: number, 
    category_id: number
}

export class CreateVideoService {
    async execute({ name, description, duration, category_id }: VideoRequest): Promise<Video | Error>{
        const repo = AppDataSource.getRepository(Video);
        const repoCategory = AppDataSource.getRepository(Category);

        const category = await repoCategory.findOne({where: {id: category_id}});

        if(!category) {
            return new Error("Category does not exists");
        }

        const video = repo.create({
           name,
           description,
           duration,
           category_id
        });

        await repo.save(video);

        return video;
    }
}