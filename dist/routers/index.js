"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const user_1 = __importDefault(require("./user"));
const activity_1 = __importDefault(require("./activity"));
const rootRouter = (0, express_1.Router)();
rootRouter.use("/auth", auth_1.default);
rootRouter.use("/user", user_1.default);
rootRouter.use("/activity", activity_1.default);
rootRouter.use("*", (req, res) => {
    res.json({ route: "Not Found" }).status(404);
});
exports.default = rootRouter;
