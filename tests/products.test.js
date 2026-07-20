const request = require("supertest");
const app = require("../server/server");

describe("GET /foods", () => {

    // Checks that the endpoint works
    test("should return all food items", async () => {

        const response = await request(app).get("/foods");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(5);
    });

});