// pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // Liste des compétences
  const roles = [
    { title: "DÉVELOPPEUR FULL STACK", icon: "fa-laptop-code" },
    { title: "ARCHIVISTE", icon: "fa-box-archive" },
    { title: "DESIGNER VISUEL & UI/UX", icon: "fa-palette" }
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // États pour le lecteur audio
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Animation des métiers
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  // Gestion Play / Pause Audio
  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Réinitialiser à la fin de la lecture
  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="hero-container">
      {/* Texte filigrane d'arrière-plan */}
      <div className="bg-watermark">
        Emérus.dev
      </div>

      {/* --- Element Audio caché --- */}
      <audio 
        ref={audioRef} 
        src="/img/audio.mpeg" 
        onEnded={handleAudioEnded}
      />

      {/* --- Lecteur Audio Vocal (Placé en haut) --- */}
      <div className="audio-player-badge">
        <button 
          onClick={toggleAudio} 
          className={`audio-btn ${isPlaying ? 'playing' : ''}`}
          aria-label="Écouter le message vocal"
        >
          <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          <span>{isPlaying ? 'Mettre en pause' : 'Écouter mon message'}</span>
        </button>

        {/* Onde sonore / Courbe d'égaliseur */}
        <div className={`waveform-container ${isPlaying ? 'active' : ''}`}>
          <span className="wave-bar"></span>
          <span className="wave-bar"></span>
          <span className="wave-bar"></span>
          <span className="wave-bar"></span>
          <span className="wave-bar"></span>
        </div>
      </div>

      {/* --- Section SVG pour les marqueurs de flèches --- */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <marker 
            id="arrow-head" 
            markerWidth="8" 
            markerHeight="8" 
            refX="7" 
            refY="4" 
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#a1a1aa" />
          </marker>
        </defs>
      </svg>

      {/* Flèche 1: Travaux -> Photo */}
      <svg className="arrow-svg arrow-travaux" style={{ top: '30%', left: '34%', width: '80px', height: '60px' }}>
        <path 
          d="M10,10 Q45,50 70,40" 
          fill="none" 
          stroke="#a1a1aa" 
          strokeWidth="1.8" 
          className="animated-path"
          markerEnd="url(#arrow-head)" 
        />
      </svg>

      {/* Flèche 2: À propos -> Photo */}
      <svg className="arrow-svg arrow-apropos" style={{ top: '28%', right: '34%', width: '80px', height: '60px' }}>
        <path 
          d="M70,10 Q35,50 10,40" 
          fill="none" 
          stroke="#a1a1aa" 
          strokeWidth="1.8" 
          className="animated-path"
          markerEnd="url(#arrow-head)" 
        />
      </svg>

      {/* Flèche 3: Photo -> Parlons-en */}
      <svg className="arrow-svg arrow-contact" style={{ bottom: '31%', right: '34%', width: '75px', height: '55px' }}>
        <path 
          d="M10,10 Q25,45 65,35" 
          fill="none" 
          stroke="#a1a1aa" 
          strokeWidth="1.8" 
          className="animated-path"
          markerEnd="url(#arrow-head)" 
        />
      </svg>

     {/* Badge 1: Projets (Redirection vers la page des projets) */}
<Link to="/projects" className="floating-badge badge-travaux">
  <i className="fa-solid fa-briefcase"></i>
  <span>Projets</span>
</Link>

     {/* Badge 2: À propos */}
<Link to="/about" className="floating-badge badge-apropos">
  <i className="fa-solid fa-user"></i>
  <span>À Propos</span>
</Link>
      {/* Note Post-it jaune (Bas-Gauche) */}
      <div className="sticky-note">
        <div className="sticky-pin"></div>
        Développeur Web & Designer<br />
        Made in Benin...
      </div>

      {/* Photo centrale Polaroid */}
      <div className="polaroid-wrapper">
        <div className="polaroid-tape"></div>
        <img 
          src="/img/moi.jpeg" 
          alt="Emérus SOGLO" 
          className="polaroid-img" 
        />
        
        {/* Nom & Métier Animé sous le Polaroid */}
        <div className="name-tag">
          <span>Moi c'est Emérus</span>
          <div className={`role-animated ${fade ? 'fade-in' : 'fade-out'}`} style={{ color: '#8A4CF3', fontWeight: 'bold' }}>
            <i className={`fa-solid ${roles[currentRoleIndex].icon}`} style={{ color: '#8A4CF3' }}></i>
            <span style={{ textTransform: 'uppercase' }}>{roles[currentRoleIndex].title}</span>
          </div>
        </div>
      </div>

      {/* Badge 3: Parlons-en (Lien vers la page contact) */}
<Link to="/contact" className="floating-badge badge-contact">
  <i className="fa-solid fa-envelope"></i>
  <span>Parlons-en</span>
</Link>
    </section>
  );
}