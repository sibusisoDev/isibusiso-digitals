// Load environment variables from a .env file
import dotenv from "dotenv";
dotenv.config()
// Importing core libraries
// I will use Express framework for building my web server
// Include the Node http server
// Created my custom route
// Serve static files like CSS,JS,IMAGES
import express from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { initStorage } from "./storage";
import { setupVite } from "./vite";
import { logMiddleware, errorHandler } from "./middleware";

// Create Express app and HTTP Server
const app = express();
const httpServer = createServer(app);

// use middleware to parse any incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware which will run on every request
app.use(logMiddleware);

// Register routes and start the server inside an async
(async () => {
    try {
        await initStorage();
        await registerRoutes(httpServer, app);

        // Static serving
        if (process.env.NODE_ENV === "production") {
            serveStatic(app);
        } else {
            await setupVite(httpServer, app);
        }

        // Error handler to catch errors from routes
        app.use(errorHandler);

        // Define port from .env or use the default to 3000
        const port = parseInt(process.env.PORT || "3000", 10);

        // Start listening to requests
        httpServer.listen({port, host: "0.0.0.0"}, () => {
        console.log(`Server running on port ${port}`);
        });
    } catch(err) {
        console.error("Server Startup Error:", err);
    }
})();

