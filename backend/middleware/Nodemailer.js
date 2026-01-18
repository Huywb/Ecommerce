import { transporter } from "../config/nodemailer.js"

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    await transporter.sendMail({
      from: '"My App" <no-reply@myapp.com>',
      to,
      subject,
      text,
      html
    })
  } catch (error) {
    console.error('Send email error:', error)
  }
}