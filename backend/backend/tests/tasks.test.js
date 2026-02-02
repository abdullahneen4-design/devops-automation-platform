const request = require("supertest");
const app = require(process.cwd() + "/src/app.js");


describe("Tasks API", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ name: "Test task" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Test task");
  });

  it("should start a task", async () => {
    const createRes = await request(app)
      .post("/tasks")
      .send({ name: "Run task test" });

    const taskId = createRes.body.id;

    const runRes = await request(app)
      .post(`/tasks/${taskId}/run`);

    expect(runRes.statusCode).toBe(200);
    expect(runRes.body.message).toBe("Task started");
  });
});
