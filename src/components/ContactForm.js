import React from 'react';

const ContactForm = () => (
  <div className="container">
    <h2>Contacto</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mensaje:</label>
        <textarea className="form-control" id="message" rows="4"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  </div>
);

export default ContactForm;
