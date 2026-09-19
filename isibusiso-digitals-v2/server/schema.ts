import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters."),

    email: z
        .string()
        .trim()
        .email("Please enter a valid email address."),

    project: z
        .string()
        .trim()
        .optional()
        .default(""),

    message: z
        .string()
        .trim()
        .min(10, "Message must contain at least 10 characters."),
});

export type ContactRequest = z.infer<typeof contactSchema>;

export interface SavedContact extends ContactRequest {
    id: string;
    createdAt: Date;
}