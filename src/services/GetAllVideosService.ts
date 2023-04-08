import { IVideoRepository } from "../repositories/IVideoRepository";

export class GetAllVideosService {
    constructor(private videoRepository: IVideoRepository){}

    async execute(){
        const videos = await this.videoRepository.findAll();

        return videos;
    }
}