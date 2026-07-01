import express, {type Express} from "express";
import path from "path";

export function serveStatic(app: Express) {
    app.use(express.static(path.join(__dirname, "../public")));
}