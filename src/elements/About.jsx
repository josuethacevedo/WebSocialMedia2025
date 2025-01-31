import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import about from "../assets/images/about/Sobre-nosotros.png";
import findingImg from "../assets/images/about/Aumenta-tu-visibilidad.png";
import teamImg1 from "../assets/images/about/Publicidad-Digital3.png";
import teamImg2 from "../assets/images/about/Publicidad-Digital2.png";
import teamImg3 from "../assets/images/about/Publicidad-Digital.png";

class About extends Component {
  render() {
    let title = "Sobre nosotros",
      description =
        "En Social Media Panamá, ayudamos a marcas y negocios a destacar en el mundo digital. Nos especializamos en estrategias de marketing en redes sociales, gestión de contenido y publicidad digital para conectar con la audiencia correcta y generar resultados.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Nosotros - Social Media Panamá" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Quienes somos"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={about}
                      alt="Nosotros images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Quiénes somos</h3>
                          <p>
                            Somos un equipo apasionado por el marketing digital, comprometido con impulsar el crecimiento de empresas a través de estrategias innovadoras y efectivas en redes sociales.


                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Quiénes somos</h3>
                          <p>
                            Nuestra misión es crear contenido de alto impacto, optimizar la presencia en línea y aumentar la interacción con los clientes para maximizar el potencial de cada marca.


                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Nuestros Datos Curiosos
                  </h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">Encuentra tu éxito ahora</h4>
                <p>El momento de destacar en el mundo digital es <strong>ahora</strong>. Con estrategias efectivas y contenido impactante, te ayudamos a <strong>impulsar tu marca y conectar con tu audiencia</strong>.
                  <ul>
                    <li>Aumenta tu visibilidad</li>
                    <li>Genera más clientes potenciales</li>
                    <li>Mejora tu presencia en redes sociales</li>
                  </ul></p>
                <a className="rn-btn btn-white" href="/about">
                  ¡Comenzar ahora!
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img src={findingImg} alt="Finding Images" />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25">
                  <h2 className="title">Atención Personalizada</h2>
                  <p>
                    En <strong>Social Media Panamá</strong>, trabajamos contigo de forma cercana y personalizada.
                    Diseñamos estrategias a medida y colaboramos con expertos para ofrecer soluciones
                    integrales en marketing digital, redes sociales y contenido.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={teamImg1} alt="Estrategia Digital" />
                  </div>
                  <div className="content">
                    <h4 className="title">Estrategia Digital</h4>
                    <p className="designation">
                      Diseñamos planes personalizados para hacer crecer tu marca en redes sociales.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={teamImg2} alt="Gestión de Contenido" />
                  </div>
                  <div className="content">
                    <h4 className="title">Gestión de Contenido</h4>
                    <p className="designation">
                      Creación de publicaciones, diseño gráfico y contenido optimizado para engagement.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img className="w-100" src={teamImg3} alt="Publicidad Digital" />
                  </div>
                  <div className="content">
                    <h4 className="title">Publicidad Digital</h4>
                    <p className="designation">
                      Campañas estratégicas en Facebook, Instagram y Google Ads para potenciar tu negocio.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}
            </div>
          </div>
        </div>
        {/* End Team Area  */}






        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default About;
