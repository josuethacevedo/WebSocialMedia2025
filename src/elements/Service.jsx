import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast, FiLayers, FiUsers, FiMonitor, FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceList = [
    {
        id: 40,
        slug: "growth-marketing-automatizacion",
        icon: <FiUsers />,
        title: 'Growth Marketing & Automatización',
        description: 'Estrategias avanzadas de crecimiento combinadas con automatización de marketing para maximizar conversiones y fidelización de clientes.'
    },
    {
        id: 43,
        slug: "contenido-en-video-y-short-form",
        icon: <FiUsers />,
        title: 'Contenido en Video y Short-Form',
        description: 'Producción y optimización de contenido en video para TikTok, Reels e historias, aumentando el engagement y alcance de tu marca.'
    },
    {
        id: 44,
        slug: "redes-y-e-commerce",
        icon: <FiUsers />,
        title: 'Publicidad en Redes y E-commerce',
        description: 'Campañas de alto rendimiento en Facebook, Instagram y TikTok Ads, enfocadas en conversión y ventas online.'
    }
];

class Service extends Component {
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Estrategias para Redes y Ventas' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
    
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Estrategias para Redes y Ventas'} />
                {/* End Breadcrump Area */}
    
                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Marketing Digital para Crecimiento y Conversión</h2>
                                    <p>
                                        Impulsamos tu negocio con estrategias de Growth Marketing, contenido en video y publicidad digital. <br />
                                        Llega a más clientes y maximiza tus resultados con campañas innovadoras y automatizadas.
                                    </p>
                                </div>
                            </div>
                        </div>
    
                        <div className="row creative-service">
                            {ServiceList.map((val, i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={val.id}>
                                    <a href={`/service-detail/${val.slug}`}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}
    
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
export default Service;