import { AppDataSource } from '../database/data-source';
import { Video } from "../entities/Video";

export class GetAllVideosService {
    async execute(): Promise<Video[] | Error>{
        const repo = AppDataSource.getRepository(Video);

        const videos = await repo.find({
            relations: ["category"]
        });

        return videos;
    }
}