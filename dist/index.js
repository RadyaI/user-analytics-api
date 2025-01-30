"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routers_1 = __importDefault(require("./routers"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ status: true }).status(200);
});
app.use("/api", routers_1.default);
exports.prismaClient = new client_1.PrismaClient();
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT} 💫`);
});
