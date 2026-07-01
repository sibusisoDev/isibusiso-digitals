import type { Express } from "express";
import type { Server } from "http";
import { contactSchema, transporter } from "./mail";
import { storage } from "./storage";

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {

    // -----------------------------
    // Contact Form Route
    // -----------------------------
    app.post("/api/contact", async (req, res) => {
        // 1. Validate incoming data
        const result = contactSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Invalid form data",
                errors: result.error.format()
            });
        }

        const { name, email, project, message } = result.data;

        try {
            // 2. Save to database
            const saved = await storage.saveContact({
                name,
                email,
                project,
                message
            });

            // 3. Send email notification
            await transporter.sendMail({
                from: `"isibusiso Digital Experiences" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_USER,
                replyTo: email,
                subject: `New Project Inquiry from ${name}${project ? ` (${project})` : ""}`,
                html: `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    ${project ? `<p><strong>Project:</strong> ${project}</p>` : ""}
                    <p><strong>Message:</strong><br/>${message}</p>
                    <hr/>
                    <p><em>Stored in database with ID: ${saved.id}</em></p>
                `
            });

            // 4. Respond to client
            return res.status(200).json({
                message: "Your message has been received. We will contact you shortly."
            });

        } catch (error) {
            console.error("Contact route error:", error);

            return res.status(500).json({
                message: "Something went wrong while processing your request."
            });
        }
    });

    return httpServer;
}