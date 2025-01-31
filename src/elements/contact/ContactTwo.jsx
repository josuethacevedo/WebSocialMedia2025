import React, { Component } from "react";
import ContactForm from "./ContactForm";

import about from "../../assets/images/about/contactanos.png";

class ContactTwo extends Component {
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Hablemos sobre tu estrategia digital</h2>
                <p className="description">
                ¿Listo para llevar tu marca al siguiente nivel? Contáctanos y diseñemos juntos una estrategia 
                de marketing digital efectiva para tu negocio.
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={about} alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactTwo;
