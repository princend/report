"use strict";
exports.__esModule = true;
var user_model_1 = require("../model/user.model");
var UserController = /** @class */ (function () {
    function UserController() {
        this.userModel = new user_model_1["default"]();
    }
    /**
     *
     */
    //取得商品
    UserController.prototype.getMerchandise = function (req, res) {
        var param = req.query;
        if (+param.id <= 1000) {
            res.send("\u5546\u54C1" + param.id);
        }
        else {
            res.send("\u67E5\u7121\u5546\u54C1");
        }
    };
    return UserController;
}());
exports["default"] = UserController;
