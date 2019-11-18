"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Route = /** @class */ (function () {
    function Route() {
        this.router = express_1.Router();
        this.prefix = '/';
    }
    Route.prototype.getRouter = function () {
        return this.router;
    };
    Route.prototype.getPrefix = function () {
        return this.prefix;
    };
    return Route;
}());
exports["default"] = Route;
