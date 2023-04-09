import { IVideoRepository } from "../repositories/IVideoRepository";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

type VideoRequest = {
    name: string;
    description: string,
    duration: number, 
    category_id: number
}

export class CreateVideoService {
    constructor(private videoRepository: IVideoRepository, private categoryRepository: ICategoryRepository){}

    async execute({ name, description, duration, category_id }: VideoRequest){
        const category = await this.categoryRepository.findById(category_id);

        if(!category) {
            throw new Error("Category does not exists");
        }
        
        const videoExists = await this.videoRepository.findByName(name);
        
        if(videoExists) {
            throw new Error("Video already exists");
        }

        const video = this.videoRepository.create({
            name,
            description,
            duration,
            category_id
         });

        return video;
    }
}