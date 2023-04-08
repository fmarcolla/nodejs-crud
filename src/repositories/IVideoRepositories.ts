
import { Video } from "../entities/Video";

interface IVideoRepositories {
    create(video: Video): Promise<Video>;
    exists(id: number): Promise<boolean>;
}

export { IVideoRepositories };