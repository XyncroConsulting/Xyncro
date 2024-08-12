import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './Logo.png';

const Header = () => {
  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Si el menú está abierto, cierra el menú al hacer clic en una opción
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

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
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={handleNavLinkClick}>
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects" onClick={handleNavLinkClick}>
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleNavLinkClick}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;





