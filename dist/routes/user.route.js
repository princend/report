"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const user_controller_1 = require("../controllers/user-controller");
class UserRoute extends route_1.default {
    constructor() {
        super();
        this.userController = new user_controller_1.default();
        this.prefix = '';
        this.setRoutes();
    }
    setRoutes() {
        this.router.get('/user', this.userController.getMerchandise);
    }
}
exports.default = UserRoute;
