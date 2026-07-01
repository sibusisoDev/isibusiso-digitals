"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = logMiddleware;
exports.errorHandler = errorHandler;
function logMiddleware(req, res, next) {
    var start = Date.now();
    res.on("finish", function () {
        var duration = Date.now() - start;
        if (req.path.startsWith("/api")) {
            console.log("".concat(req.method, " ").concat(req.path, " ").concat(res.statusCode, " in ").concat(duration, "ms"));
        }
    });
    next();
}
function errorHandler(err, _req, res, next) {
    var status = err.status || 500;
    var message = err.message || "Internal Server Error";
    console.error("Error:", err);
    if (res.headersSent)
        return next(err);
    res.status(status).json({ message: message });
}
