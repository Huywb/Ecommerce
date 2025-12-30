import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD
  },
});

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