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
exports.signUp = signUp;
const __1 = require("..");
const bcrypt_1 = require("bcrypt");
function signUp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            res.status(400).json({ msg: "email/password/name is empty" });
        }
        let user = yield __1.prismaClient.user.findFirst({ where: { email } });
        if (user) {
            res.status(400).json({ msg: "User is already exist" });
        }
        user = yield __1.prismaClient.user.create({
            data: {
                name,
                email,
                password: (0, bcrypt_1.hashSync)(password, 10)
            }
        });
        res.status(201).json(user);
    });
}
