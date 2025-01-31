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
exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const __1 = require("..");
const responses_1 = __importDefault(require("../middlewares/responses"));
const bcrypt_1 = require("bcrypt");
function getAllUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield __1.prismaClient.user.findMany();
        if (result.length === 0) {
            return res.status(404).json((0, responses_1.default)(404, "Data does not exist", result));
        }
        res.status(200).json((0, responses_1.default)(200, "Users fetched successfully", result));
    });
}
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const result = yield __1.prismaClient.user.findFirst({ where: { id: Number(id) } });
        if (!result) {
            return res.status(404).json((0, responses_1.default)(404, "User not found", []));
        }
        res.status(200).json((0, responses_1.default)(200, "Users fetched successfully", result));
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const { name, email, password } = req.body;
        const oldData = yield __1.prismaClient.user.findFirst({ where: { id: Number(id) } });
        if (!oldData) {
            return res.status(404).json((0, responses_1.default)(404, "User not found", {}));
        }
        const result = yield __1.prismaClient.user.update({
            where: { id: Number(id) },
            data: {
                name: !name ? oldData.name : name,
                email: !email ? oldData.email : email,
                password: !password ? oldData.password : (0, bcrypt_1.hashSync)(password, 10)
            }
        });
        res.status(200).json((0, responses_1.default)(200, "Update successfully", result));
    });
}
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        let result;
        const checkId = yield __1.prismaClient.user.findFirst({ where: { id: Number(id) } });
        if (!checkId) {
            res.status(404).json((0, responses_1.default)(404, "User not found", {}));
        }
        else {
            result = yield __1.prismaClient.user.delete({ where: { id: Number(id) } });
            res.status(200).json((0, responses_1.default)(200, "Delete successfully", result));
        }
    });
}
