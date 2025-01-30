"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = resp;
function resp(errorCode, msg, data) {
    return {
        errorCode,
        msg,
        data
    };
}
