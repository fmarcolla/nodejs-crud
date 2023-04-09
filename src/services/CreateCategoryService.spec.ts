import { CategoryRepositoryInMemory } from "../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryService } from "../services/CreateCategoryService";
import { Category } from "../entities/Category";
import { ICategoryRepository } from "../repositories/ICategoryRepository";

describe("Create category", () => {
    let categoryRepository: ICategoryRepository;
    let createCategoryService: CreateCategoryService;

    beforeAll(() => {
        categoryRepository = new CategoryRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoryRepository);
    });

    it("should be able to create a category", async () => {
        
        const categoryData: Category = {
            name: "Drama",
            description: "Filmes tristes"
         };

        const category = await createCategoryService.execute(categoryData);

        expect(category).toHaveProperty("id");
        
        expect(category.name).toBe("Drama");
        expect(category.description).toBe("Filmes tristes");
    });

    it("should not be able to create an existing category", async () => {
        const categoryData: Category = {
            name: "Terror",
            description: "Filmes de medo"
        };

        await createCategoryService.execute(categoryData);
        
        await expect(createCategoryService.execute(categoryData)).rejects.toEqual(
            new Error("Category already exists")
        );
    });
});