import React from "react";
import "../Footer/footer.css";
import icon from "../../image/favicon-portafolio.png"

const Footer = () => {
  return (
    <footer class="footer-portafolio d-flex flex-column align-items-center justify-content-center mt-5 bg-dark">
      <img
        class="footer-logo mt-4"
        src={icon}
        alt="Logo del portafolio"
      />
      <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a
          href="https://github.com/acentenom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-centeno-meza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          href="mailto:acentenom58@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="bi bi-envelope"></i>
        </a>
      </div>
      <div class="derechos-de-autor">Alejandro Centeno(2023) &#169;</div>
    </footer>
  );
};

export default Footer;
