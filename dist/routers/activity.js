"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_1 = require("../controllers/activity");
const authenticate_1 = require("../middlewares/authenticate");
const activityRouter = (0, express_1.Router)();
activityRouter.get("/", authenticate_1.authenticateJWT, activity_1.getAllActivity);
activityRouter.get("/:id", authenticate_1.authenticateJWT, activity_1.getActivityById);
exports.default = activityRouter;
