import { transporter } from "./mail";

async function run() {
    try {
        const info = await transporter.sendMail({
            from: `"isibusiso Digital Experiences" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "Test Email",
            text: "This is a test email from Nodemailer + Office365.",
        });
        console.log("Email sent:", info.messageId);
    } catch (err) {
        console.error("Email error:", (err as Error).message);
    }
}

run();