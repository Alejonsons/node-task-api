import Fastify from "fastify";
import { tasksRoutes } from "./routes/tasks.routes.js";

const app = Fastify({
  logger: true,
});

app.register(tasksRoutes);

app.listen({
  port: 3333,
});