import React, { Component } from "react";
import ContactEmail from "../common/ContactEmail";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/socialmediapanama" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/socialmedia" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/sm__pa" },
  { Social: <FaTwitter />, link: "https://twitter.com/tedyblood" },
];

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Listo para impulsar tu negocio</span>
                    <h2>
                    Hagamos crecer <br /> tu marca
                    </h2>
                    <a className="rn-button-style--2" href="/contact">
                      <span>Contáctanos ahora</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Accesos Rapidos</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/portfolio">Trabajos</a>
                          </li>
                          <li>
                            <a href="/about">Quienes Somos</a>
                          </li>
                          <li>
                            <a href="/contact">Let's Talk</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Hola</h4>
                        <ul className="ft-link">
                          <li>
                            <ContactEmail />
                           
                          </li>
                          
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          Copyright © 2024 Social Media Panama All Rights Reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
