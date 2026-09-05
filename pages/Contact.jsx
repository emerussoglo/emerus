// pages/Contact.jsx
import React, { useState } from 'react';


export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Génération du lien mailto pré-rempli
    const subject = encodeURIComponent(`Nouveau message de ${formData.fullName}`);
    const body = encodeURIComponent(
      `Nom: ${formData.fullName}\nE-mail: ${formData.email}\nTéléphone: ${formData.phone || 'Non renseigné'}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:emerussoglo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page-container">
      {/* Bouton Retour */}
      <div className="back-button-wrapper">
        <a href="/" className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Retour</span>
        </a>
      </div>

      <div className="contact-content-grid">
        {/* Colonne Gauche : Coordonnées + Quote */}
        <div className="contact-info-column">
          <div className="contact-card info-card">
            <h2>Mes Coordonnées</h2>

            <div className="info-list">
              {/* E-mail */}
              <a href="mailto:emerussoglo@gmail.com" className="info-item">
                <div className="info-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">E-mail</span>
                  <span className="info-value">emerussoglo@gmail.com</span>
                </div>
              </a>

              {/* WhatsApp / Téléphone */}
              <a 
                href="https://api.whatsapp.com/send/?phone=2290141516389" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="info-item"
              >
                <div className="info-icon whatsapp-icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">WhatsApp / Tel</span>
                  <span className="info-value">+229 01 41 51 63 89</span>
                </div>
              </a>

              {/* Localisation */}
              <div className="info-item">
                <div className="info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info-text">
                  <span className="info-label">Localisation</span>
                  <span className="info-value">Cotonou, Bénin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Encadré Citation Jaune Style Post-it */}
          <div className="quote-box">
            <p>"Travaillons ensemble pour créer quelque chose d'unique !"</p>
          </div>
        </div>

        {/* Colonne Droite : Formulaire */}
        <div className="contact-form-column">
          <div className="contact-card form-card">
            <h2>Envoyez-moi un E-mail</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Champ Nom */}
              <div className="form-group">
                <label htmlFor="fullName">Nom complet</label>
                <input 
                  type="text" 
                  id="fullName"
                  name="fullName"
                  placeholder="Votre nom"
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>

              {/* Ligne E-mail + Téléphone */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Téléphone (optionnel)</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="+229 ..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Champ Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Bouton d'envoi violet */}
              <button type="submit" className="submit-btn">
                <i className="fa-regular fa-paper-plane"></i>
                <span>Envoyer par E-mail</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}