"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_1 = require("../middlewares/authenticate");
const user_1 = require("../controllers/user");
const userRoute = (0, express_1.Router)();
userRoute.get("/", authenticate_1.authenticateJWT, user_1.getAllUser);
userRoute.get("/:id", authenticate_1.authenticateJWT, user_1.getUserById);
exports.default = userRoute;
