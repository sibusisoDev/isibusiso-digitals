import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "./schema";
import { sendContactEmail } from "./mail";

export async function registerRoutes(
    httpServer: Server,
    app: Express
): Promise<Server> {


    // Contact Form
    app.post("/api/contact", async (req, res) => {

        console.log("BODY RECEIVED:", req.body);

        // Validate request body
        const validation = contactSchema.safeParse(req.body);

        if (!validation.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed.",
                errors: validation.error.flatten().fieldErrors,
            });
        }

        try {

            // Save to database
            const saved = await storage.saveContact(validation.data);

            // Send email
            await sendContactEmail(validation.data);

            return res.status(201).json({
                success: true,
                message: "Your enquiry has been submitted successfully.",
                id: saved.id,
            });

        } catch (error) {

            console.error("Contact route error:", error);

            return res.status(500).json({
                success: false,
                message: "Something went wrong while processing your request.",
            });

        }

    });

    return httpServer;
}