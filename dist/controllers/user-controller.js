"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../model/user.model");
class UserController {
    //取得商品
    getMerchandise(req, res) {
        let param = req.query;
        let userModel = new user_model_1.UserModel();
        let result = userModel.getMerchandise(param);
        res.send(result);
    }
}
exports.default = UserController;
