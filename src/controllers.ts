import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
    const { title, color } = req.body;
    try {
        const newTask = await prisma.task.create({
            data: { title, color },
        });
        res.json(newTask);
    } catch (error) {
        res.status(500).json({ error: "Failed to create task" });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    try {
        const updatedTask = await prisma.task.update({
            where: { id: Number(id) },
            data: { title, color, completed },
        });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Failed to update task" });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await prisma.task.delete({ where: { id: Number(id) } });
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete task" });
    }
};
