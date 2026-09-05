import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projectsList = [
    {
      id: "01",
      title: "MyENA",
      category: "Gestion Documentaire",
      url: "https://my-ena-1.netlify.app",
      image: "/img/projects/myena.png",
      description: "Plateforme numérique pour la gestion des archives et de la documentation.",
      tags: ["React.js", "Node.js", "CSS"]
    },
    {
      id: "02",
      title: "HG Bénin",
      category: "E-commerce",
      url: "https://hgbenin.com",
      image: "/img/projects/hg-benin.png",
      description: "Boutique de vente d'accessoires informatiques.",
      tags: ["React.js", "Node.js", "CSS"]
    },
    {
      id: "03",
      title: "Pichflow",
      category: "SaaS & Marketing",
      url: "https://pichflow.vercel.app",
      image: "/img/projects/pichflow.png",
      description: "Automatisation du marketing, du copywriting et de la facturation.",
      tags: ["Next.js", "CSS", "Turso", "PostgreSQL"]
    },
    {
      id: "04",
      title: "TéléOff",
      category: "IoT & Automates",
      url: "https://tele-off.com",
      image: "/img/projects/teleoff.png",
      description: "Gestion centralisée des appareils Shelly : contrôle et automatisation en temps réel.",
      tags: ["React.js", "Node.js", "Django"]
    },
    {
      id: "05",
      title: "Pharma24",
      category: "Santé & Géolocalisation",
      url: "https://pharma24.vercel.app",
      image: "/img/projects/pharma24.png",
      description: "Trouver une pharmacie de garde et scanner QR codes et codes-barres.",
      tags: ["Next.js", "CSS", "Turso", "PostgreSQL"]
    },
    {
      id: "06",
      title: "Centre Sèwèdo",
      category: "Organisation & Impact",
      url: "https://centresewedo.vercel.app",
      image: "/img/projects/centre-sewedo.png",
      description: "Initiative intégrée et innovante au Bénin dédiée au développement humain, à l’éducation, à la santé et au bien-être des familles.",
      tags: ["React", "Vite", "JavaScript"]
    },
    {
      id: "07",
      title: "B-rWorld Group",
      category: "BTP & Automobile",
      url: "https://www.brenewedworld.com",
      image: "/img/projects/brworld.png",
      description: "Entreprise béninoise spécialisée dans le génie civil, l’architecture, les études et le suivi des travaux de BTP, ainsi que le commerce automobile.",
      tags: ["Next.js", "CSS", "Turso", "PostgreSQL"]
    },
    {
      id: "08",
      title: "AMZATIC Bénin",
      category: "Boutique Informatique",
      url: "https://amzaticbenin.vercel.app",
      image: "/img/projects/amzatic.png",
      description: "Boutique informatique au Bénin proposant ordinateurs, imprimantes, accessoires et électroménager, avec accompagnement et service après-vente.",
      tags: ["React", "Vite", "JavaScript"]
    },
    {
      id: "09",
      title: "OnDigital",
      category: "Agence Digitale",
      url: "https://ondigital-swart.vercel.app",
      image: "/img/projects/ondigital.png",
      description: "Agence digitale basée à Cotonou spécialisée en marketing digital, création de sites web, design graphique et production vidéo.",
      tags: ["React", "Vite", "JavaScript"]
    }
  ];

  return (
    <div className="projects-page-container">
      {/* Bouton Retour */}
      <div className="back-button-wrapper">
        <Link to="/" className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Retour</span>
        </Link>
      </div>

      {/* En-tête de la page */}
      <div className="projects-header">
        <h1>Projets</h1>
        <p className="projects-subtitle">Des idées transformées en produits.</p>
        <p className="projects-description">
          Une sélection de projets conçus pour résoudre des problèmes réels.
        </p>
      </div>

      {/* Grille des cartes de projets */}
      <div className="projects-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="project-card">
            {/* Aperçu / Badge Catégorie & Image */}
            <div className="project-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                onError={(e) => {
                  e.target.style.display = 'none'; // Masque l'image si elle n'existe pas encore
                }}
              />
              <span className="project-number">{project.id}</span>
              <span className="project-category-badge">{project.category}</span>
            </div>

            {/* Contenu */}
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-card-description">{project.description}</p>

              {/* Badges de Technologies */}
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>

              {/* Bouton Lien */}
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn"
              >
                <span>Voir le projet</span>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}