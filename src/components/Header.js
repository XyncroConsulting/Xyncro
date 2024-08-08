import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Archivo CSS para estilos personalizados
import logo from './Logo.png'; // Asegúrate de que la ruta sea correcta

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Xyncro Logo" className="logo-image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Proyectos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Sobre Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;



