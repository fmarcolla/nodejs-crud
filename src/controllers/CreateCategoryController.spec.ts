import { app } from "../app";
import { InitDatabase } from "../database/data-source";
import { AppDataSource } from "../database/config-test";
import request from "supertest";

describe("Create Category Controller", () => {
    beforeAll(async () => {
        await InitDatabase(AppDataSource);
        // await AppDataSource.runMigrations();
    });

    afterAll(async () => {
        await AppDataSource.dropDatabase();
        await AppDataSource.destroy();
    })

    it("should be able to create a new category", async () => {
        const response = await request(app)
        .post("/categories")
        .send({
            name: "Test",
            description: "test test test"
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id");
    });

    it("should not be able to create an existing category", async () => {
        await request(app)
        .post("/categories")
        .send({
            name: "Test3",
            description: "test test test"
        })

        const response = await request(app)
        .post("/categories")
        .send({
            name: "Test3",
            description: "test test test"
        })

        expect(response.status).toBe(400);
    });
});