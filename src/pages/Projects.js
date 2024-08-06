// src/pages/Projects.js
import React from 'react';
import ImageComponent from '../components/ImageComponent';
import './Projects.css'; // Archivo CSS para estilos específicos de la página de proyectos

const projects = [
  {
    id: 1,
    title: 'Proyecto Medbot',
    description: 'Medbot es un simulador clínico de IA para la industria de salud que ayuda a los profesionales y estudiantes a mejorar su desempeño.',
    imgSrc: '/images/medbot.jpg'
  },
  {
    id: 2,
    title: 'Proyecto CureMD+',
    description: 'Tu alternativa accesible para una cobertura integral de salud. Planes accesibles, atención personalizada y tecnología de vanguardia para cuidar tu salud.',
    imgSrc: '/images/curemdplus.jpg'
  },
  {
    id: 3,
    title: 'Proyecto IntelliHealth',
    description: 'IA al servicio de la eficiencia de tu organización. Soluciones para darle a su negocio una ventaja competitiva.',
    imgSrc: '/images/intellihealth.jpg'
  },
  {
    id: 4,
    title: 'Proyecto CureMD',
    description: 'Solución de Telemedicina completa integrada con IA y un sistema de gratificaciones para brindar la mejor experiencia a nuestros pacientes.',
    imgSrc: '/images/curemd.jpg'
  },
  {
    id: 5,
    title: 'Proyecto Geobalance',
    description: 'En nuestra plataforma, ofrecemos soluciones de compensación de huella de carbono tanto para empresas comprometidas con la responsabilidad ambiental como para individuos conscientes del medio ambiente.',
    imgSrc: '/images/geobalance.jpg'
  }
];

const Projects = () => {
  return (
    <div className="container mt-4">
      <h1 className="page-title">Nuestros Proyectos</h1>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card project-card">
              <ImageComponent src={project.imgSrc} alt={project.title} className="project-image" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

