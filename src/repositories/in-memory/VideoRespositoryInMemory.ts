import { Video } from "../../entities/Video";
import { IVideoRepositories } from "../IVideoRepositories";
import { v4 as uuid } from "uuid";

class VideoRepositoryInMemory implements IVideoRepositories {
    private videos: Video[] = [];
    
    async create(video: Video): Promise<Video>{
        Object.assign(video, {
            id: uuid(),
        });

        this.videos.push(video);
        return video;
    }

    async exists(id: number): Promise<boolean>{
        const video = this.videos.some((video) => video.id === id);
        return video;
    }
}

export { VideoRepositoryInMemory };