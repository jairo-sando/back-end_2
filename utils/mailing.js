
import nodemailer from "nodemailer"; 

export const sendRecoveryMail = async (email, token) => {

    const link = `http://localhost:8080/reset-password?token=${token}`;

  await  transporter.sendMail({
    
    to: email,
    subject: "Recuperar contraseña",
    html: `<a href="${link}">Restablecer contraseña</a>` 



  });

};