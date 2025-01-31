import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { InstagramEmbed } from 'react-social-media-embed';


const BlogDetails = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [featuredImage, setFeaturedImage] = useState(""); // Estado para la imagen destacada

  useEffect(() => {
    if (!slug) return;

    // Generar número aleatorio de likes entre 3 y 88
    setLikes(Math.floor(Math.random() * (88 - 3 + 1)) + 3);

    // Obtener el post por slug
    fetch(`https://socialmedia-panama.com/data/d/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const post = data[0];

          setArticle({
            title: post.title.rendered,
            excerpt: post.excerpt.rendered,
            content: post.content.rendered,
            date: post.date,
            author: post.author,
            commentsCount: 0,
          });

          // Si hay una imagen destacada, obtener su URL en tamaño medium_large
          if (post.featured_media) {
            fetch(`https://socialmedia-panama.com/data/d/wp-json/wp/v2/media/${post.featured_media}`)
              .then(response => response.json())
              .then(mediaData => {
                setFeaturedImage(mediaData.media_details.sizes.medium_large.source_url);
              })
              .catch(error => console.error("Error al cargar la imagen destacada:", error));
          }
        } else {
          console.error("Artículo no encontrado");
        }
      })
      .catch(error => console.error("Error al cargar el artículo:", error))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Blog Details" />
      <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

      {/* Start Breadcrump Area */}
      <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7" data-black-overlay="9">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                {loading ? (
                  <h2 className="title theme-gradient">Cargando...</h2>
                ) : (
                  <h2 className="title theme-gradient">{article?.title}</h2>
                )}
                {!loading && (
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock /> {new Date(article?.date).toLocaleDateString()}
                    </li>
                    <li>
                      <FiUser /> Autor: Josueth Acevedo
                    </li>
                    <li>
                      <FiHeart /> {likes} Likes
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {loading ? (
                <p>Cargando detalles...</p>
              ) : (
                <div className="inner-wrapper">
                  <div className="inner">
                    {/* Excerpt */}
                    <div dangerouslySetInnerHTML={{ __html: article?.excerpt }} />
                    {/* Imagen destacada */}
                    {featuredImage && (
                      <div className="thumbnail">
                        <img src={featuredImage} alt="Imagen destacada" />
                      </div>
                    )}
                    {/* Cuerpo del artículo */}
                    <div className="mt--40" dangerouslySetInnerHTML={{ __html: article?.content }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

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
};

export default BlogDetails;
