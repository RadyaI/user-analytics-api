"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const client_1 = require("@prisma/client");
const secret_1 = require("./secret");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ status: true }).status(200);
});
app.use("/api/v1", routers_1.default);
exports.prismaClient = new client_1.PrismaClient();
app.listen(secret_1.PORT, () => {
    console.log(`Server running on ${secret_1.PORT} 💫`);
});
