"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield prisma.task.findMany();
    res.json(tasks);
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, color } = req.body;
    try {
        const newTask = yield prisma.task.create({
            data: { title, color },
        });
        res.json(newTask);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create task" });
    }
});
exports.createTask = createTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    try {
        const updatedTask = yield prisma.task.update({
            where: { id: Number(id) },
            data: { title, color, completed },
        });
        res.json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update task" });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.task.delete({ where: { id: Number(id) } });
        res.json({ message: "Task deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete task" });
    }
});
exports.deleteTask = deleteTask;
