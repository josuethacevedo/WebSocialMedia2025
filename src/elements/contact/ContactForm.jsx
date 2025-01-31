import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
  return <p className="success-message">✅ Tu mensaje ha sido enviado con éxito.</p>;
};

const ContactForm = () => {
  const [result, showResult] = useState(false);
  const [error, setError] = useState(""); 
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form.fullname.value || !form.email.value || !form.message.value) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setError("");

    emailjs
      .sendForm(
        "smpa", // ✅ Tu Service ID
        "template_w3wlldk", // ✅ Tu Template ID
        formRef.current,
        "0uEvHpMAdZZ9UHwtn" // ✅ Tu Public Key
      )
      .then(() => {
        showResult(true);
        form.reset(); 
      })
      .catch((error) => {
        console.error("Error al enviar el mensaje:", error);
        setError("Ocurrió un error. Inténtalo de nuevo.");
      });

    setTimeout(() => showResult(false), 5000);
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      {error && <p className="error-message">{error}</p>}
      <div className="rn-form-group">
        <input type="text" name="fullname" placeholder="Tu Nombre" required />
      </div>
      <div className="rn-form-group">
        <input type="email" name="email" placeholder="Tu Correo Electrónico" required />
      </div>
      <div className="rn-form-group">
        <input type="text" name="phone" placeholder="Teléfono" />
      </div>
      <div className="rn-form-group">
        <textarea name="message" placeholder="Tu Mensaje" required></textarea>
      </div>
      <div className="rn-form-group">
        <button className="rn-button-style--2 btn-solid" type="submit">
          Enviar Mensaje
        </button>
      </div>
      <div className="rn-form-group">{result && <Result />}</div>
    </form>
  );
};

export default ContactForm;
