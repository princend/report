"use strict";
exports.__esModule = true;
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.prototype.getMerchandise = function (param) {
        var result = '';
        if (+param.id <= 1000) {
            result = "\u5546\u54C1" + param.id;
        }
        else {
            result = "\u67E5\u7121\u5546\u54C1";
        }
        return result;
    };
    return UserModel;
}());
exports.UserModel = UserModel;
