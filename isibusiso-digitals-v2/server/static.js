"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serveStatic = serveStatic;
var express_1 = require("express");
var path_1 = require("path");
function serveStatic(app) {
    app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
}
