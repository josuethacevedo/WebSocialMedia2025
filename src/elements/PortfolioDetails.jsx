import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import '../assets/css/custom.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';

const PortfolioDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://socialmedia-panama.com/data/d/wp-json/wp/v2/portafolio?slug=${slug}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const portfolioData = data[0]; // Tomar el primer elemento si existe
          
          let imageUrl = "https://via.placeholder.com/600X600";

          const description = portfolioData.acf?.descripcion || "";
          const cleanedDescription = description.replace(/\[caption.*?\]|\[\/caption\]/g, "").trim();

          setPortfolio({
            id: portfolioData.id,
            title: portfolioData.acf?.titulo || "Sin título",
            subtitle: portfolioData.acf?.subtitulo || "",
            description: cleanedDescription,
            image: imageUrl,
            videoId: portfolioData.acf?.video_relacionado || "",
            socialLinks: {
              facebook: portfolioData.acf?.Facebook || "",
              linkedin: portfolioData.acf?.linkedin || "",
              instagram: portfolioData.acf?.instagram || "",
              twitter: portfolioData.acf?.twitter || "",
            },
          });
        } else {
          console.error("Portafolio no encontrado.");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al cargar el portafolio:", error);
        setLoading(false);
      });
  }, [slug]);

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Portfolio Details" />
      <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

      <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4" data-black-overlay="7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                {loading ? (
                  <h2 className="title theme-gradient">Cargando...</h2>
                ) : (
                  <>
                    <h2 className="title theme-gradient">{portfolio?.title}</h2>
                    <p>{portfolio?.subtitle}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {loading ? (
                <p>Cargando detalles...</p>
              ) : (
                <div className="portfolio-details">
                  <div className="inner">
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: portfolio?.description }} />
                    <div className="portfolio-thumb-inner">
                      <div className="thumb position-relative mb--30"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* 📌 Sección de Compartir en Redes Sociales */}
              <div className="portfolio-share-area mt--60">
                {/* Solo renderiza Instagram si hay una URL válida */}
                {portfolio?.socialLinks.instagram && (
                  <div>
                    <h2>Ejemplo de Publicaciones</h2>
                    <InstagramEmbed url={portfolio.socialLinks.instagram} width={328} />
                  </div>
                )}

                {/* Solo renderiza Twitter si hay una URL válida */}
                {portfolio?.socialLinks.twitter && (
                  <div>
                    
                    <TikTokEmbed url={portfolio.socialLinks.twitter} width={325} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Scroll Up */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default PortfolioDetails;
