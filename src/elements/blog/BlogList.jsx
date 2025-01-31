import React, { Component, Fragment } from "react";

class BLogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], // Lista de artículos del blog
      loading: true, // Estado de carga
    };
  }

  componentDidMount() {
    // Llamar al endpoint con _embed para incluir imágenes destacadas
    fetch("https://socialmedia-panama.com/data/d/wp-json/wp/v2/posts?_embed")
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data, // Guardar los posts en el estado
          loading: false, // Desactivar el estado de carga
        });
      })
      .catch(error => {
        console.error("Error al cargar los posts:", error);
        this.setState({ loading: false }); // Desactivar el estado de carga en caso de error
      });
  }

  render() {
    const { posts, loading } = this.state;

    return (
      <Fragment>
        <div className="row">
          {loading ? (
            <p>Cargando artículos...</p>
          ) : (
            posts.map(post => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={post.id}>
                <div className="blog blog-style--1">
                  <div className="thumbnail">
                    <a href={`/blog-details/${post.slug}`}>
                      <img
                        className="w-100"
                        src={
                          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                          "https://placehold.co/600x400"
                        } // Imagen destacada o imagen por defecto
                        alt={post.title.rendered}
                      />
                    </a>
                  </div>
                  <div className="content">
                    <p className="blogtype">Categoría</p> {/* Opcional: Extraer categorías */}
                    <h4 className="title">
                      <a href={`/blog-details/${post.slug}`}>{post.title.rendered}</a>
                    </h4>
                    <div className="blog-btn">
                      <a className="rn-btn text-white" href={`/blog-details/${post.slug}`}>
                        Leer más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Fragment>
    );
  }
}

export default BLogList;
