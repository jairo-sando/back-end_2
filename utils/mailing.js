
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
});

/* ENVIAR MAIL  */

export const sendMail = async ({ to, subject, html }) => {
  return await transporter.sendMail({
    from: `Soporte <${process.env.MAIL_USER}>`,
    to,
    subject,
    html
  });
};