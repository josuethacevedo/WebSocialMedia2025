import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";

// Correo real y correo alternativo para copiar
const emailReal = "contacto@socialmedia-panama.com";
const emailFake = "proteccionscrap@gmail.com"; // Correo falso que se copiará

const ContactEmail = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(emailReal); // Asigna el correo real en la interfaz
  }, []);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailFake); // Copia el correo falso
    alert("El correo ha sido copiado."); // Mensaje opcional
  };

  return (
    <a href={`mailto:${email}`} onCopy={handleCopy}>
              {email}
            </a>
  );
};

export default ContactEmail;
