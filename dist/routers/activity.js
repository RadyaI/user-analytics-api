"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_1 = require("../controllers/activity");
const activityRouter = (0, express_1.Router)();
activityRouter.get("/", activity_1.getAllActivity);
exports.default = activityRouter;
