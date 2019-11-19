"use strict";
exports.__esModule = true;
var user_model_1 = require("../model/user.model");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    //取得商品
    UserController.prototype.getMerchandise = function (req, res) {
        var param = req.query;
        var userModel = new user_model_1.UserModel();
        var result = userModel.getMerchandise(param);
        res.send(result);
    };
    return UserController;
}());
exports["default"] = UserController;
