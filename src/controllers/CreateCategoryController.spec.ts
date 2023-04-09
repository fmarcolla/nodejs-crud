import { app } from "../app";
import request from "supertest";

describe("Create Category Controller", () => {
    it("should be able to create a new category", async () => {
        const response = await request(app)
        .post("/categories")
        .send({
            name: "Test",
            description: "test test test"
        })

        expect(response.status).toBe(200);
    });
});