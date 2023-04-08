import { AppDataSource } from '../../database/data-source';
import { Video } from "../../entities/Video";
import { IVideoRepositories } from "../IVideoRepositories";

class TypeormVideoRepository implements IVideoRepositories {
    async create({ name, description, duration, category_id }: Video): Promise<Video>{
        const repo = AppDataSource.getRepository(Video);

        const video = repo.create({
            name,
            description,
            duration,
            category_id
         });
 
         await repo.save(video);
 
         return video
    }

    async exists(id: number){
        const repo = AppDataSource.getRepository(Video);
        const video = await repo.findOne({where: {id}});
        
        return !!video;
    }
}

export { TypeormVideoRepository };