import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Para navegación interna
import ScrollToTop from "react-scroll-up";
import FooterTwo from "../component/footer/FooterTwo";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/HeaderFour";
import Helmet from "../component/common/Helmet";

const CreativePortfolio = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    fetch("https://socialmedia-panama.com/data/d/wp-json/wp/v2/portafolio")
      .then(response => response.json())
      .then(async data => {
        const portfolioWithImages = await Promise.all(
          data.map(async item => {
            let imageUrl = "";
            if (item.featured_media !== 0) {
              try {
                const mediaResponse = await fetch(
                  `https://socialmedia-panama.com/data/d/wp-json/wp/v2/media/${item.featured_media}`
                );
                const mediaData = await mediaResponse.json();
                imageUrl = mediaData.source_url || "";
              } catch (error) {
                console.error("Error al cargar la imagen:", error);
              }
            }

            return {
              id: item.id,
              slug: item.slug,  // Ahora incluye el slug
              title: item.title.rendered,
              category: "Portafolio", // Puedes cambiar esto si hay categorías reales en la API
              image: imageUrl || "https://via.placeholder.com/300x300",
            };
          })
        );

        setPortfolioList(portfolioWithImages);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar el portafolio:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="creative-portfolio">
      <Helmet pageTitle="🚀 Social Media Panamá | Estrategias Digitales 2025: SEO, Ads y Contenidos que Convierten" />

      {/* Start Header Area */}
      <Header headerPosition="header--static" logo="symbol-dark" color="color-black" />
      {/* End Header Area */}
           {/* Start Service Area  */}
           <div
          className="service-area creative-service-wrapper ptb--120 bg_color--5"
          id="service"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12">
                <div className="section-title text-left mb--30">
                  <h1>Estrategias de Marketing Digital y Gestión de Redes Sociales en Panamá</h1>
                  <h5>
                  Impulsamos marcas con contenido innovador: 
                  </h5>
                  <p>Descubre nuestros últimos proyectos en redes sociales, branding y publicidad digital.</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div className="creative-portfolio-wrapper bg_color--1">
        <div className="creative-portfolio-wrapper plr--10 mb--80 mr--10 ml--10">
          <div className="row row--5">
            {loading ? (
              <p>Cargando portafolio...</p>
            ) : (
              portfolioList.map((item, i) => (
                <div className="col-lg-3 col-md-6 col-12" key={i}>
                  <div className="portfolio-style--2">
                    <div
                      className="thumbnail"
                      onClick={() => navigate(`/portafolio/${item.slug}`)}
                      style={{ cursor: "pointer" }}
                    >
                      <img className="w-100" src={item.image} alt={item.title} />
                    </div>
                    <div className="content">
                      <p className="portfoliotype">{item.category}</p>
                      <h4
                        className="title"
                        onClick={() => navigate(`/portafolio/${item.slug}`)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.title}
                      </h4>
                      <div className="portfolio-btn">
                        <button
                          className="rn-btn text-black"
                          onClick={() => navigate(`/portafolio/${item.slug}`)}
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Footer Style */}
      <FooterTwo />
      {/* End Footer Style */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default CreativePortfolio;
