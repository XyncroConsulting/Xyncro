// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ImageComponent from '../components/ImageComponent';
import './Home.css'; // Importar archivo CSS para la página de inicio

const projects = [
  {
    id: 1,
    title: 'Soluciones de Salud Digital',
    description: 'Innovadoras soluciones para la gestión de la salud y la telemedicina.',
    image: '/images/healthcare.jpg',
  },
  {
    id: 2,
    title: 'Plataformas de Comercio Electrónico',
    description: 'Desarrollo de plataformas personalizadas para el comercio electrónico.',
    image: '/images/ecommerce.jpg',
  },
  {
    id: 3,
    title: 'Aplicaciones Financieras Innovadoras',
    description: 'Aplicaciones móviles y web para el sector financiero con tecnología avanzada.',
    image: '/images/fintech.jpg',
  },
];

const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="jumbotron-container">
        <div className="jumbotron text-center">
          <h1 className="display-4">Bienvenidos a Xyncro</h1>
          <p className="lead">
            Donde la innovación se encuentra con la creatividad para dar vida a tus ideas tecnológicas.
          </p>
          <div className="mt-4">
            <Link to="/services" className="btn btn-primary btn-lg mx-2">Descubre nuestros Servicios</Link>
            <Link to="/projects" className="btn btn-secondary btn-lg mx-2">Ver Proyectos</Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="my-5 section-container">
        <h2>Tu Socio en Innovación</h2>
        <p>
          En Xyncro, estamos dedicados a transformar tus ideas en soluciones tecnológicas de vanguardia. 
          Con un equipo de expertos en desarrollo de software, web y aplicaciones móviles, tenemos la experiencia y 
          la creatividad para enfrentar desafíos complejos y proporcionar soluciones a medida. 
          Creemos que no hay límite para lo que se puede crear, y estamos aquí para hacerlo realidad.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="my-5 section-container">
        <h2>Qué Hacemos</h2>
        <p>
          Desde el diseño y desarrollo de plataformas web hasta aplicaciones móviles innovadoras, nuestro enfoque se centra en 
          satisfacer las necesidades únicas de cada cliente. Ya sea que necesites una solución personalizada para tu negocio 
          o un producto digital innovador, nuestro equipo está listo para llevar tu visión al siguiente nivel.
        </p>
        <p>
          Nuestra experiencia abarca una amplia gama de sectores, incluyendo salud, comercio electrónico, finanzas y más. 
          Trabajamos estrechamente con nuestros clientes para entender sus objetivos y proporcionar soluciones que no solo 
          cumplan sino superen sus expectativas.
        </p>
      </section>

      {/* Project Highlights Section */}
      <section className="my-5 section-container">
        <h2 className="section-title">Destacados de Nuestros Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <ImageComponent src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3">
          Conoce más sobre nuestros proyectos y cómo hemos ayudado a nuestros clientes a alcanzar el éxito en la página de <Link to="/projects">Proyectos Realizados.</Link>
        </p>
      </section>

      {/* Call to Action */}
      <section className="my-5 text-center section-container">
        <h2>¿Listo para Innovar?</h2>
        <p>
          Estamos aquí para ayudarte a hacer realidad tus ideas. Ya sea que tengas una visión clara o solo un concepto inicial, 
          nuestro equipo está preparado para colaborar contigo en cada etapa del proceso. <Link to="/contact">Contáctanos </Link> 
          y comencemos a trabajar juntos para crear algo extraordinario.
        </p>
        <Link to="/contact" className="btn btn-primary">Hablemos</Link>
      </section>
    </div>
  );
};

export default Home;
