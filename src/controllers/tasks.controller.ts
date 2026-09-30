import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateTaskBodyProps } from "./types.js";

async function createTask(request: FastifyRequest<{ Body: CreateTaskBodyProps }>, reply: FastifyReply) {
    const { title } = request.body;

    console.log('Título recebido', title);

    return reply.status(201).send({
        message: 'Task created successfully',
        task: {
            title
        }
    })
}

export { createTask };