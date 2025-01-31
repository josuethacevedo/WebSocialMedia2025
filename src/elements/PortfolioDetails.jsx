import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import '../assets/css/custom.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { InstagramEmbed } from 'react-social-media-embed';


const PortfolioDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`https://socialmedia-panama.com/data/d/wp-json/wp/v2/portafolio/${id}`)
      .then(response => response.json())
      .then(data => {
        let imageUrl = "https://via.placeholder.com/600";

        const description = data.acf?.descripcion || "";
        const cleanedDescription = description.replace(/\[caption.*?\]|\[\/caption\]/g, "").trim();

        setPortfolio({
          id: data.id,
          title: data.acf?.titulo || "Sin título",
          subtitle: data.acf?.subtitulo || "",
          description: cleanedDescription,
          image: imageUrl,
          videoId: data.acf?.video_relacionado || "",
          socialLinks: {
            facebook: data.acf?.Facebook || "",
            linkedin: data.acf?.linkedin || "",
            instagram: data.acf?.instagram || "",
            twitter: data.acf?.twitter || "",
          },
        });
        setLoading(false);
      })
      .catch(error => console.error("Error al cargar el portafolio:", error));
  }, [id]);

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
                    <br></br>
                    <div dangerouslySetInnerHTML={{ __html: portfolio?.description }} />
                    <div className="portfolio-thumb-inner">
                      <div className="thumb position-relative mb--30">


                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <h2>Publicación de Instagram</h2>
                <InstagramEmbed url="https://www.instagram.com/p/DFdzBjAyWr2/" width={328} />
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

export default PortfolioDetails;