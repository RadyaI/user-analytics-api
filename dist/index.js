"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.get("/", (req, res) => {
    res.json({ status: true }).status(200);
});
app.use("/api", routers_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT} 💫`);
});
