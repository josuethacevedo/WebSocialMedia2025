import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

import logoDefault from "../../assets/images/logo/logo.png";
import logoLight from "../../assets/images/logo/logo-light.png";
import logoDark from "../../assets/images/logo/logo-dark.png";
import logoSymbolDark from "../../assets/images/logo/logo-symbol-dark.png";
import logoSymbolLight from "../../assets/images/logo/logo-symbol-light.png";
import logoAllDark from "../../assets/images/logo/logo-all-dark.png";

class HeaderFour extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    const { logo, color, headerPosition } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src={logoLight} alt="Social Media Panamá" />;
    } else if (logo === "dark") {
      logoUrl = <img src={logoDark} alt="Social Media Panamá" />;
    } else if (logo === "symbol-dark") {
      logoUrl = <img src={logoSymbolDark} alt="Social Media Panamá" />;
    } else if (logo === "all-dark") {
      logoUrl = <img src={logoAllDark} alt="Social Media Panamá" />;
    } else if (logo === "symbol-light") {
      logoUrl = <img src={logoSymbolLight} alt="Social Media Panamá" />;
    } else {
      logoUrl = <img src={logoDefault} alt="Social Media Panamá" />;
    }

    return (
      <header
        className={`header-area formobile-menu ${headerPosition} ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/about">Quién Soy</Link>
                </li>
                {/* <li>
                  <Link to="/como-lo-hacemos">¿Cómo lo hacemos?</Link>
                </li> */}
                <li>
                  <Link to="/service">Servicios</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <a
                className="rn-btn"
                href="https://api.whatsapp.com/send?phone=50765164741"
              >
                <span>Whatsapp</span>
              </a>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderFour;
