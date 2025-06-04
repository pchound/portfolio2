'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function sendEmail({ email, subject, message }) {

    if (!email || !subject || !message) {
        return {
            success: false,
            error: "Missing required fields"
        }
    }

    try {
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: 'josephwilliamgarner@gmail.com',
            subject,
            html: `<h1>New Message from ${email}</h1><br/><div><p>Hello</p><p>${message}</p></div>`
        })

        if (error) {
            console.log("Error sending email: ", error);
            return {
                success: false,
                error: "Error sending email. Try again!"
            }
        }
        return { success: true, data, message: "Email sent successfully!" }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            error: "Error sending email. Try again!"
        }
    }
}
