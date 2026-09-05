// pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
export default function About() {
  const stats = [
    {
      icon: "fa-briefcase",
      value: "Depuis 2021",
      label: "D'expérience & Projets",
      colorClass: "stat-yellow"
    },
    {
      icon: "fa-rocket",
      value: "06+",
      label: "Projets majeurs réalisés",
      colorClass: "stat-blue"
    },
   {
  icon: "fa-solid fa-video",
  value: "11K+",
  label: "Abonnés YouTube",
  colorClass: "stat-purple"
},
    {
      icon: "fa-location-dot",
      value: "Cotonou",
      label: "Basé au Bénin 🇧🇯",
      colorClass: "stat-pink"
    }
  ];

  const skillCategories = [
    {
      title: "Archivistique & Documentation",
      icon: "fa-box-archive",
      colorClass: "cat-yellow",
      skills: ["Traitement documentaire", "Conservation", "SGED", "Valorisation", "Numérisation"]
    },
    {
      title: "Développement Web",
      icon: "fa-code",
      colorClass: "cat-blue",
      skills: ["React.js", "Next.js", "Node.js", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      title: "Design & Création Graphique",
      icon: "fa-palette",
      colorClass: "cat-green",
      skills: ["UI/UX Design", "Figma", "Canva", "Identité visuelle"]
    },
    {
      title: "Gestion & Digitalisation",
      icon: "fa-database",
      colorClass: "cat-purple",
      skills: ["Bases de données (Turso, PostgreSQL)", "Audit documentaire", "Processus numériques", "YouTube & Content Strategy"]
    }
  ];

  return (
    <div className="about-page-container">
      {/* Bouton Retour */}
      <div className="back-button-wrapper">
        <Link to="/" className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Retour</span>
        </Link>
      </div>

      {/* Carte Principale */}
      <div className="about-card">
        {/* Titre & Sous-titre */}
        <div className="about-header">
          <h1>Salut, c'est <span className="highlight-name">Emérus</span> ! 👋</h1>
          <p className="about-subtitle">
            Archiviste en formation · Développeur Web · Créateur numérique 💻
          </p>
        </div>

        {/* Bio / Description */}
        <div className="about-description">
          <p>
            Étudiant en Sciences et Techniques de l'Information Documentaire à l'ENA (Université d'Abomey-Calavi, Bénin). 
            Depuis 2021, je développe des solutions numériques modernes pour transformer l'information, les archives et les services en expériences simples, utiles et accessibles.
          </p>
          <p>
            Plus qu'un développeur, un profil hybride : <em>"Je ne sépare pas le fond de la forme : une archive bien gérée mérite une interface bien conçue."</em>
          </p>
        </div>

        {/* Section Chiffres Clés */}
        <div className="about-section">
          <h2 className="section-title">
            <i className="fa-solid fa-chart-simple"></i> En Quelques Chiffres
          </h2>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card ${stat.colorClass}`}>
                <div className="stat-icon">
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Compétences & Outils */}
        <div className="about-section">
          <h2 className="section-title">
            <i className="fa-solid fa-wand-magic-sparkles"></i> Langages, Frameworks & Compétences
          </h2>

          <div className="skills-grid">
            {skillCategories.map((cat, index) => (
              <div key={index} className={`skill-card ${cat.colorClass}`}>
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <i className={`fa-solid ${cat.icon}`}></i>
                  </div>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}