import nodemailer from "nodemailer";
import type { ContactRequest } from "./schema";

console.log("===== GMAIL CONFIG CHECK =====");
console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log(
    "GMAIL_APP_PASSWORD exists:",
    !!process.env.GMAIL_APP_PASSWORD
);
console.log(
    "GMAIL_APP_PASSWORD length:",
    process.env.GMAIL_APP_PASSWORD?.length
);
console.log("CONTACT_RECEIVER:", process.env.CONTACT_RECEIVER);
console.log("==============================");


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: { user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
    },
});



export async function sendContactEmail(data: ContactRequest): Promise<void> {
    const { name, email, project, message } = data;

    try {
        const projectType = project || "Not specified";

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.CONTACT_RECEIVER,
            replyTo: email,
            subject: `New Project Enquiry from ${name}`,

            html: `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>New Project Enquiry</title>
                    </head>
                    
                    <body style="
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f5;
                    font-family: Inter, Space Grotesk, sans-serif;
                    color: #18181b;
                    ">
                    
                    <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="background-color: #f4f4f5; padding: 40px 20px;"
                    >
                    <tr>
                        <td align="center">
                    
                        <!-- Main Container -->
                    <table
                        width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                    max-width: 650px;
                    background-color: #ffffff;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #e4e4e7;
                    "
                    >
                    
                    <!-- Header -->
                    <tr>
                        <td
                            style="
                    background-color: #111111;
                    padding: 32px 40px;
                    text-align: center;
                    "
                    >
                    <h1 style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: -0.5px;
                    ">
                    New Project Enquiry
                    </h1>
                    
                    <p style="
                    margin: 8px 0 0;
                    color: #a1a1aa;
                    font-size: 14px;
                    ">
                    Someone has contacted you through your website.
                    </p>
                    </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                    <td style="padding: 40px;">
                    
                    <p style="
                    margin: 0 0 24px;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #3f3f46;
                    ">
                    Hello,
                    </p>
                    
                    <p style="
                    margin: 0 0 30px;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #3f3f46;
                    ">
                    You have received a new project enquiry through
                    your website contact form.
                    </p>
                    
                    <!-- Contact Details -->
                    <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="
                    background-color: #fafafa;
                    border: 1px solid #e4e4e7;
                    border-radius: 8px;
                    "
                    >
                    <tr>
                        <td style="padding: 20px;">
                    
                    <p style="
                    margin: 0 0 6px;
                    font-size: 12px;
                    color: #71717a;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    ">
                    Client Name
                    </p>
                    
                    <p style="
                    margin: 0 0 20px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #18181b;
                    ">
                    ${name}
                    </p>
                    
                    <p style="
                    margin: 0 0 6px;
                    font-size: 12px;
                    color: #71717a;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    ">
                    Email Address
                    </p>
                    
                    <p style="
                    margin: 0 0 20px;
                    font-size: 16px;
                    color: #18181b;
                    ">
                    ${email}
                    </p>
                    
                    <p style="
                    margin: 0 0 6px;
                    font-size: 12px;
                    color: #71717a;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    ">
                    Project Type
                    </p>
                    
                    <p style="
                    margin: 0;
                    font-size: 16px;
                    font-weight: 600;
                    color: #18181b;
                    ">
                    ${projectType}
                    </p>
                    
                    </td>
                    </tr>
                    </table>
                    
                    <!-- Message -->
                    <div style="margin-top: 30px;">
                    
                    <p style="
                    margin: 0 0 10px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #18181b;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    ">
                    Client Message
                    </p>
                    
                        <div style="
                        background-color: #fafafa;
                        border-left: 4px solid #18181b;
                        padding: 20px;
                        border-radius: 0 8px 8px 0;
                        ">
                    <p style="
                    margin: 0;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #3f3f46;
                    white-space: pre-line;
                    ">
                    ${message}
                    </p>
                    </div>
                    
                    </div>
                    
                    <!-- Reply Button -->
                    <table
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="margin-top: 32px;"
                    >
                    <tr>
                        <td
                            align="center"
                    style="
                    background-color: #111111;
                    border-radius: 6px;
                    "
                    >
                    <a
                        href="mailto:${email}?subject=Re: Your Project Enquiry"
                    style="
                    display: inline-block;
                    padding: 14px 24px;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;
                    "
                    >
                    Reply to Client
                    </a>
                    </td>
                    </tr>
                    </table>
                    
                    </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                    <td
                        style="
                    border-top: 1px solid #e4e4e7;
                    padding: 24px 40px;
                    text-align: center;
                    background-color: #fafafa;
                    "
                    >
                    
                    <p style="
                    margin: 0 0 6px;
                    font-size: 13px;
                    font-weight: 600;
                    color: #18181b;
                    ">
                    Website Contact Form
                    </p>
                    
                    <p style="
                    margin: 0;
                    font-size: 12px;
                    line-height: 1.5;
                    color: #71717a;
                    ">
                    This notification was automatically generated
                    from your website.
                    </p>
                    
                    </td>
                    </tr>
                    
                    </table>
                    
                    </td>
                    </tr>
                    </table>
                    
                    </body>
                    </html>
                        `,
                            });

                            console.log("Contact email sent successfully.");
                        } catch (error) {
                            console.error("Failed to send contact email:", error);
                            throw error;
                        }
                    }
