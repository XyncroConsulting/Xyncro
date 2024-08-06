// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="page-title">Sobre Nosotros</h1>
      
      {/* Company Overview */}
      <section className="my-5">
        <h2>¿Quiénes Somos?</h2>
        <p>
          En Xyncro, somos un equipo de profesionales apasionados por la tecnología y la innovación. 
          Nos especializamos en el desarrollo de software personalizado, soluciones web y aplicaciones móviles 
          que ayudan a nuestros clientes a alcanzar sus objetivos. Con una trayectoria de más de 5 proyectos exitosos, 
          trabajamos estrechamente con nuestros clientes para transformar sus ideas en productos tangibles y eficaces.
        </p>
      </section>

      {/* Our Mission */}
      <section className="my-5">
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra misión es proporcionar soluciones tecnológicas de alta calidad que impulsen el éxito de nuestros clientes. 
          Nos esforzamos por ser líderes en la industria, ofreciendo un servicio excepcional y productos innovadores que 
          excedan las expectativas.
        </p>
      </section>

      {/* Our Team */}
      <section className="my-5">
        <h2>Nuestro Equipo</h2>
        <p>
          El equipo de Xyncro está compuesto por expertos en diversas áreas de la tecnología, incluyendo desarrollo de software, 
          diseño web, desarrollo móvil y consultoría tecnológica. Nos enorgullece contar con un equipo talentoso y dedicado que 
          trabaja en conjunto para entregar resultados de calidad.
        </p>
        <p>
          Cada miembro de nuestro equipo aporta una perspectiva única y habilidades especializadas, lo que nos permite 
          abordar proyectos de manera integral y efectiva. Desde desarrolladores experimentados hasta diseñadores creativos, 
          estamos comprometidos con la excelencia en cada paso del camino.
        </p>
      </section>

      {/* Our Values */}
      <section className="my-5">
        <h2>Nuestros Valores</h2>
        <ul>
          <li><strong>Innovación:</strong> Estamos siempre en la búsqueda de nuevas ideas y tecnologías para ofrecer soluciones avanzadas.</li>
          <li><strong>Calidad:</strong> Nos comprometemos a entregar productos y servicios de la más alta calidad.</li>
          <li><strong>Colaboración:</strong> Trabajamos de la mano con nuestros clientes para entender sus necesidades y superar sus expectativas.</li>
          <li><strong>Integridad:</strong> Actuamos con transparencia y honestidad en todas nuestras interacciones.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="my-5 text-center">
        <h2>Únete a Nosotros</h2>
        <p>Si compartes nuestra pasión por la tecnología y deseas formar parte de un equipo dinámico y en crecimiento, ¡nos encantaría saber de ti!</p>
        <a href="/careers" className="btn btn-primary">Ver Oportunidades de Empleo</a>
      </section>
    </div>
  );
};

export default About;


