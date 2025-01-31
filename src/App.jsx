// Create Import File
import "./index.scss";
import "photoswipe/dist/photoswipe.css";
import PageScrollTop from "./component/PageScrollTop";

// Home layout
import CreativePortfolio from "./home/CreativePortfolio";
import PortfolioDetails from "./elements/PortfolioDetails";
import About from "./elements/About";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import Service from "./elements/Service";
import ServiceDetail from "./elements/ServiceDetails"
import Contact from "./elements/Contact";

import Error404 from "./elements/error404";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<CreativePortfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        {/* Ruta para detalles del Blog */}
        <Route path="/blog-details/:slug" element={<BlogDetails />} />+

        {/* Ruta para detalles del portafolio */}
        <Route path="/portafolio/:id" element={<PortfolioDetails />} />

        {/* Ruta para detalles de los servicios */}
        <Route path="/service-detail/:slug" element={<ServiceDetail />} />

        {/* Ruta para manejar errores */}
        <Route path="404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <PageScrollTop />
    </>
  );
}

export default App;
