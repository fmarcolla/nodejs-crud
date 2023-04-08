
import { Video } from "../entities/Video";

interface IVideoRepository {
    create(video: Video): Promise<Video>;
    findById(id: number): Promise<Video>;
    findAll(): Promise<Video[]>;
}

export { IVideoRepository };