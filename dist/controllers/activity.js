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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActivity = createActivity;
exports.getAllActivity = getAllActivity;
exports.getActivityById = getActivityById;
exports.totalActivity = totalActivity;
const __1 = require("..");
const responses_1 = __importDefault(require("../middlewares/responses"));
function createActivity(userId, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield __1.prismaClient.activity.create({
            data: {
                userId,
                token,
            }
        });
        return result;
    });
}
function getAllActivity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield __1.prismaClient.activity.findMany();
        if (result.length === 0) {
            return res.status(404).json((0, responses_1.default)(404, "Data not found", {}));
        }
        res.status(200).json((0, responses_1.default)(200, "Data fetch successfully", result));
    });
}
function getActivityById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const result = yield __1.prismaClient.activity.findFirst({
            where: { id: Number(id) },
            include: {
                user: true
            }
        });
        if (!result) {
            return res.status(404).json((0, responses_1.default)(404, "Data not found", {}));
        }
        res.status(200).json((0, responses_1.default)(200, "Data fetch successfully", result));
    });
}
function totalActivity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.user;
        const result = yield __1.prismaClient.activity.findMany({
            where: { userId: data.userId }
        });
        if (result.length === 0) {
            return res.status(200).json((0, responses_1.default)(200, "Empty", result));
        }
        res.status(200).json((0, responses_1.default)(200, "Data fetch successfully", result, { total: result.length }));
    });
}
