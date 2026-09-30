import type { FastifyInstance } from "fastify";
import { createTask } from "../controllers/tasks.controller.js";

async function tasksRoutes(app: FastifyInstance){
    app.post("/tasks", createTask);
}

export { tasksRoutes };