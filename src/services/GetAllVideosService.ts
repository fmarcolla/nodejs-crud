import { Video } from "../entities/Video";
import { IVideoRepository } from "../repositories/IVideoRepository";

export class GetAllVideosService {
    constructor(private videoRepository: IVideoRepository){}

    async execute(): Promise<Video[] | Error>{
        const videos = await this.videoRepository.findAll();

        return videos;
    }
}