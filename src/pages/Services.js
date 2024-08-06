// src/pages/Services.js
import React from 'react';

const Services = () => {
  return (
    <div className="container mt-4">
      <h1 className="page-title">Nuestros Servicios</h1>

      {/* Web Development Section */}
      <section className="my-5">
        <h2>Desarrollo Web</h2>
        <p>
          Creamos sitios web modernos, responsivos y personalizados que se adaptan a las necesidades de tu negocio. 
          Desde landing pages hasta aplicaciones web complejas, utilizamos las últimas tecnologías para asegurar 
          una experiencia de usuario óptima y un rendimiento superior.
        </p>
      </section>

      {/* Mobile App Development Section */}
      <section className="my-5">
        <h2>Desarrollo de Aplicaciones Móviles</h2>
        <p>
          Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android, utilizando React Native para 
          ofrecer soluciones eficientes y de alta calidad. Nuestro enfoque en la usabilidad y el diseño asegura 
          que las aplicaciones no solo sean funcionales, sino también atractivas y fáciles de usar.
        </p>
      </section>

      {/* Custom Software Development Section */}
      <section className="my-5">
        <h2>Desarrollo de Software a Medida</h2>
        <p>
          Ofrecemos soluciones de software personalizadas para empresas de todos los tamaños. Ya sea que necesites 
          una herramienta interna para optimizar procesos o un producto digital innovador para el mercado, 
          nuestro equipo puede crear software a medida que cumple con tus especificaciones exactas.
        </p>
      </section>

      {/* E-commerce Solutions Section */}
      <section className="my-5">
        <h2>Soluciones de Comercio Electrónico</h2>
        <p>
          Ayudamos a las empresas a establecer y mejorar su presencia en línea con plataformas de comercio electrónico 
          robustas y escalables. Desde tiendas en línea hasta sistemas de gestión de inventario, 
          proporcionamos soluciones que facilitan las operaciones y mejoran la experiencia del cliente.
        </p>
      </section>

      {/* Consulting and Strategy Section */}
      <section className="my-5">
        <h2>Consultoría y Estrategia</h2>
        <p>
          Ofrecemos servicios de consultoría para ayudarte a definir la mejor estrategia tecnológica para tu negocio. 
          Desde la selección de tecnologías hasta la planificación de la arquitectura de software, 
          estamos aquí para asesorarte en cada etapa del proceso de desarrollo.
        </p>
      </section>

      {/* Call to Action */}
      <section className="my-5 text-center">
        <h2>¿Interesado en Nuestros Servicios?</h2>
        <p>
          Contáctanos hoy para discutir cómo podemos colaborar y ayudar a tu negocio a alcanzar nuevas alturas con nuestras soluciones tecnológicas.
        </p>
        <a href="/contact" className="btn btn-primary">Contáctanos</a>
      </section>
    </div>
  );
};

export default Services;

