import { Video } from "../../entities/Video";
import { IVideoRepository } from "../IVideoRepository";
import { v4 as uuid } from "uuid";

class VideoRepositoryInMemory implements IVideoRepository {
    private videos: Video[] = [];
    
    async create(video: Video): Promise<Video>{
        Object.assign(video, {
            id: uuid(),
        });

        this.videos.push(video);
        return video;
    }

    async findById(id: number): Promise<Video> {
        const video = this.videos.find((video) => video.id === id);
        return video;
    }

    async findAll(): Promise<Video[]> {
        return this.videos;
    }
}

export { VideoRepositoryInMemory };