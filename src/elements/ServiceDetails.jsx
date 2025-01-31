import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://socialmedia-panama.com/data/d/wp-json/wp/v2/services?slug=${slug}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setService({
            ...data[0],
            featuredImage: data[0].acf?.img || "https://placehold.co/600x400",
            secondaryImage: data[0].acf?.img_2 || "https://placehold.co/600x400",
          });
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar el servicio:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!service) {
    return <p>Error: No se encontró el servicio.</p>;
  }

  return (
    <React.Fragment>
      <PageHelmet pageTitle={service.title.rendered} />
      <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

      <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5" data-black-overlay="9">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{service.title.rendered}</h2>
                <p>Soluciones avanzadas para el crecimiento digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img className="w-100" src={service.featuredImage} alt={service.acf?.h4 || "Imagen del Servicio de Marketing Digital"} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="details mt_md--30 mt_sm--30">
                        <p>{service.acf?.parrafo || "Información no disponible"}</p>
                        <p>{service.acf?.parrafo_copiar || ""}</p>
                        <h4 className="title">{service.acf?.h4 || "Título no disponible"}</h4>
                        <ul className="liststyle">
                          <li>{service.acf?.parrafo_copiar2 || ""}</li>
                          <li>{service.acf?.parrafo_copiar3 || ""}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row sercice-details-content align-items-center">
                    <div className="col-lg-6 col-12 order-2 order-lg-1">
                      <div className="details mt_md--30 mt_sm--30">
                        <p>{service.acf?.parrafo_copiar2 || "Información adicional no disponible"}</p>
                        <p>{service.acf?.parrafo_copiar3 || ""}</p>
                        <h4 className="title">{service.acf?.h4_copiar || "Otro título no disponible"}</h4>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img className="w-100" src={service.secondaryImage} alt={service.acf?.h4_copiar  || "Imagen del Servicio de Marketing Digital"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ServiceDetails;