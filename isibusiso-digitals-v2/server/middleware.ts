import type {Request, Response, NextFunction} from "express";

export function logMiddleware(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        if (req.path.startsWith("/api")) {
            console.log(`${req.method} ${req.path} ${res.statusCode} in ${duration}ms`);
        }
    });
    next();
}

export function errorHandler(err: any, _req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    console.error("Error:", err);
    if (res.headersSent) return next(err);
    res.status(status).json({ message });
}