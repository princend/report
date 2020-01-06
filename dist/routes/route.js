"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Route {
    constructor() {
        this.router = express_1.Router();
        this.prefix = '/';
    }
    getRouter() {
        return this.router;
    }
    getPrefix() {
        return this.prefix;
    }
}
exports.default = Route;
