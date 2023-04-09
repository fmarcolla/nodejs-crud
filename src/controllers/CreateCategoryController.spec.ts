// import { app } from "../app";
// import request from "supertest";
// import {InitDatabase} from "../database/data-source";

// describe("Create Category Controller", () => {
//     beforeAll(async () => {
//         await InitDatabase();
//     });

//     it("should be able to create a new category", async () => {
//         const response = await request(app)
//         .post("/categories")
//         .send({
//             name: "Test",
//             description: "test test test"
//         })

//         expect(response.status).toBe(200);
//         expect(response.body).toHaveProperty("id");
//     });

//     it("should not be able to create an existing category", async () => {
//         await request(app)
//         .post("/categories")
//         .send({
//             name: "Test3",
//             description: "test test test"
//         })

//         const response = await request(app)
//         .post("/categories")
//         .send({
//             name: "Test3",
//             description: "test test test"
//         })

//         expect(response.status).toBe(400);
//     });
// });