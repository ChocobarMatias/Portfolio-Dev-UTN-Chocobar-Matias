import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEOHead = ({ 
  title = "Matías Chocobar | Desarrollador Full Stack | Programador UTN-FRT",
  description = "Portfolio profesional de Matías Sebastian Chocobar, Técnico Programador Universitario UTN-FRT. Desarrollador Full Stack especializado en React, Node.js, MySQL. Disponible para proyectos freelance y posiciones full-time.",
  keywords = "desarrollador full stack, programador, React, Node.js, MySQL, UTN, portfolio, freelance, Tucumán, Argentina, JavaScript, CSS, HTML",
  canonical = "",
  image = "/src/Img/FOTO.jpg",
  type = "website"
}) => {
  const baseUrl = "https://portfolio-matias-chocobar.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return (
    <Helmet>
      {/* Título y descripción básica */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Portfolio Matías Chocobar" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:url" content={fullCanonical} />
      
      {/* Datos estructurados JSON-LD adicionales */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": fullCanonical,
          "image": fullImage,
          "author": {
            "@type": "Person",
            "name": "Matías Sebastian Chocobar",
            "jobTitle": "Desarrollador Full Stack",
            "url": baseUrl
          }
        })}
      </script>
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string
};

export default SEOHead;
