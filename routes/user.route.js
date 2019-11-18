"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var route_1 = require("./route");
var user_controller_1 = require("../controllers/user-controller");
var UserRoute = /** @class */ (function (_super) {
    __extends(UserRoute, _super);
    function UserRoute() {
        var _this = _super.call(this) || this;
        _this.userController = new user_controller_1["default"]();
        _this.prefix = '';
        _this.setRoutes();
        return _this;
    }
    UserRoute.prototype.setRoutes = function () {
        this.router.get('/user', this.userController.getMerchandise);
    };
    return UserRoute;
}(route_1["default"]));
exports["default"] = UserRoute;
