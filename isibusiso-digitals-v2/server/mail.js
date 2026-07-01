"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = exports.contactSchema = void 0;
var nodemailer_1 = require("nodemailer");
var zod_1 = require("zod");
// Validate environment variables
var emailEnvSchema = zod_1.z.object({
    EMAIL_USER: zod_1.z.string().email(),
    EMAIL_PASSWORD: zod_1.z.string().min(1),
});
emailEnvSchema.parse(process.env);
// Zod schema for contact form
exports.contactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    project: zod_1.z.string().max(8).optional(),
    message: zod_1.z.string().min(10),
});
// Create ONE reusable transporter
exports.transporter = nodemailer_1.default.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
});
