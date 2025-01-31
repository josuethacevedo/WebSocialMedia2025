import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

class PageHelmet extends Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{this.props.pageTitle} || Soluciones de Marketing Digital </title>
          <meta
            name="description"
            content="Nos especializamos en estrategias de marketing en redes sociales, gestión de contenido y publicidad digital "
          />
        </Helmet>
      </HelmetProvider>
    );
  }
}

export default PageHelmet;
