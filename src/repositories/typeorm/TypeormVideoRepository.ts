import { AppDataSource } from '../../database/data-source';
import { Repository } from 'typeorm';
import { Video } from "../../entities/Video";
import { IVideoRepository } from "../IVideoRepository";

class TypeormVideoRepository implements IVideoRepository {
    private repo: Repository<Video>;
    
    constructor(){
        this.repo = AppDataSource.getRepository(Video);
    }

    async create({ name, description, duration, category_id }: Video): Promise<Video> {
        const video = this.repo.create({
            name,
            description,
            duration,
            category_id
         });
 
         await this.repo.save(video);
 
         return video
    }

    async findById(id: number): Promise<Video> {
        const video = await this.repo.findOne({where: {id}});
        
        return video;
    }

    async findAll(): Promise<Video[]> {
        const videos = await this.repo.find({
            relations: ["category"]
        });

        return videos;
    }
}

export { TypeormVideoRepository };