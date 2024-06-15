
const request = require("supertest");
const app = require("../app");

describe("GET /users", () => {
  it("USERS responds with response!", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.text).toBe("respond with a resource");
  });
});

