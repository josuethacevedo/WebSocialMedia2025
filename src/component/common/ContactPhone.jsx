import React, { useEffect, useState } from "react";
import { FiHeadphones } from "react-icons/fi";

// Número real y número alternativo para copiar
const phoneReal = "+507 205-9514";
const phoneFake = "+507 6543-2100"; // Número falso que se copiará

const ContactPhone = () => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setPhone(phoneReal); // Asigna el número real en la interfaz
  }, []);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(phoneFake); // Copia el número falso
    alert("El número ha sido copiado."); // Mensaje opcional
  };

  return (
    <a href={`tel:${phone}`} onCopy={handleCopy}>
              {phone}
            </a>
  );
};

export default ContactPhone;
