import dotenv from "dotenv";
dotenv.config()

import nodemailer from "nodemailer";
import { z } from "zod";

// Validate environment variables
const emailEnvSchema = z.object({
    EMAIL_USER: z.string().email(),
    EMAIL_PASSWORD: z.string().min(1),
});

emailEnvSchema.parse(process.env);

// Zod schema for contact form
export const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    project: z.string().max(16).optional(),
    message: z.string().min(10),
});

// Create ONE reusable transporter
export const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
});