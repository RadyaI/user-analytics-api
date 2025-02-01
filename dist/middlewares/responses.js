"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = resp;
function resp(errorCode, msg, data, activity) {
    return {
        errorCode,
        msg,
        data,
        activity
    };
}
