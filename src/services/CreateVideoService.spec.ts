import { VideoRepositoryInMemory } from "../repositories/in-memory/VideoRespositoryInMemory";
import { CategoryRepositoryInMemory } from "../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateVideoService } from "../services/CreateVideoService";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { Video } from "../entities/Video";
import { IVideoRepository } from "../repositories/IVideoRepository";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

describe("Create video", () => {
    let videoRepository: IVideoRepository;
    let categoryRepository: ICategoryRepository;
    let createVideoService: CreateVideoService;
    let createCategoryService: CreateCategoryService;

    beforeAll(() => {
        videoRepository = new VideoRepositoryInMemory();
        categoryRepository = new CategoryRepositoryInMemory();
        createVideoService = new CreateVideoService(videoRepository, categoryRepository);
        createCategoryService = new CreateCategoryService(categoryRepository);
    });

    it("should be able to create a video", async () => {
        const categoryData = {
            name: "new category", 
            description: "teste"
        };

        const category = await createCategoryService.execute(categoryData);

        const videoData: Video = {
            name: "Interestellar",
            duration: 120,
            category_id: category.id,
            description: "Filme test"
         };

        const video = await createVideoService.execute(videoData);

        expect(video).toHaveProperty("id");
        
        expect(video.name).toBe("Interestellar");
        expect(video.description).toBe("Filme test");
        expect(video.duration).toBe(120);
        expect(video.category_id).toBe(category.id);
    });

    it("should not be able to create an existing video", async () => {
        const categoryData = {
            name: "new category 2", 
            description: "teste"
        };

        const category = await createCategoryService.execute(categoryData);

        const videoData: Video = {
            name: "test",
            duration: 120,
            category_id: category.id,
            description: "Filme test"
         };

        await createVideoService.execute(videoData);
        
        await expect(createVideoService.execute(videoData)).rejects.toEqual(
            new Error("Video already exists")
        );
    });

    it("should not be able to create a video with a non-existing category", async () => {
        const videoData: Video = {
            name: "new filme",
            duration: 100,
            category_id: 100,
            description: "Filme test"
         };

        await expect(createVideoService.execute(videoData)).rejects.toEqual(
            new Error("Category does not exists")
        );
    });
});