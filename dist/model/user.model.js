"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserModel {
    getMerchandise(param) {
        let result = '';
        if (+param.id <= 1000) {
            result = `商品${param.id}`;
        }
        else {
            result = `查無商品`;
        }
        return result;
    }
}
exports.UserModel = UserModel;
