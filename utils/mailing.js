
import "../config/env.js";
import nodemailer from "nodemailer";



export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendRecoveryMail = async (email, token) => {
  if (!token) {
    console.error("Token vacío al enviar correo!");
    return;
  }

  const link = `http://localhost:8080/reset-password?token=${token}`;

  await transporter.sendMail({
    from: `"Backend Ecommerce" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Recuperación de contraseña",
    html: `
      <h2>Recuperar contraseña</h2>
      <p>Este enlace expira en 1 hora</p>
      <a href="${link}" target="_blank">
        Restablecer contraseña
      </a>
    `
  });

  console.log("Correo de recuperación enviado a:", email);
};

