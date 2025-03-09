import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Tableau des logos des langages sous forme de SVG
const languageIcons = {
  javascript: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
        alt="JavaScript"
        className="w-6 h-6"
      />
    ),
    name: "JavaScript",
  },
  react: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React"
        className="w-6 h-6"
      />
    ),
    name: "React",
  },
  python: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
        alt="Python"
        className="w-6 h-6"
      />
    ),
    name: "Python",
  },
  html: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
        alt="HTML"
        className="w-6 h-6"
      />
    ),
    name: "HTML",
  },
  css: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
        alt="CSS"
        className="w-6 h-6"
      />
    ),
    name: "CSS",
  },
  c: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/570px-C_Programming_Language.svg.png?20201031132917"
        alt="C"
        className="w-6 h-6"
      />
    ),
    name: "C",
  },
  sql: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/fr/6/68/Oracle_SQL_Developer_logo.svg"
        alt="SQL"
        className="w-6 h-6"
      />
    ),
    name: "SQL",
  },
  tailwind: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        alt="Tailwind CSS"
        className="w-6 h-6"
      />
    ),
    name: "Tailwind CSS",
  },
  json: {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg"
        alt="JSON"
        className="w-6 h-6"
      />
    ),
    name: "JSON",
  },
  git: {
    icon: (
      <img
        src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"
        alt="GIT"
        className="w-6 h-6"
      />
    ),
    name: "GIT",
  },
};

const Card = ({ title, type, languages, imageUrl, link }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredLang, setHoveredLang] = useState(null); // Pour suivre le langage survolé
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const card = ref.current;
    const rect = card.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateY = mouseX / 25;  // Rotation horizontale
    const rotateX = -mouseY / 25; // Rotation verticale (inversée)
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setHoveredLang(null); // Réinitialiser le langage survolé
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      ref={ref}
      className="relative w-72 h-96 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div
          className="w-full h-full relative"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.6s ease',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <div
            className="absolute w-full h-full bg-zinc-300 rounded-lg shadow-lg p-4 flex flex-col justify-between"
            style={{
              backfaceVisibility: 'hidden',
            }}
          >
            <div>
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-50 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              <div className="bg-emerald-400 text-white px-3 py-1 rounded inline-block text-sm font-medium mt-2">
                {type}
              </div>
            </div>

            {/* Affichage des icônes des langages */}
            <div className="flex items-center space-x-2 mt-4">
              {languages && languages.map((lang) => (
                <motion.div
                  key={lang}
                  className="inline-block relative"
                  onMouseEnter={() => setHoveredLang(lang)}
                  onMouseLeave={() => setHoveredLang(null)}
                  whileHover={{ scale: 1.1 }}
                >
                  {languageIcons[lang.toLowerCase()].icon}
                  {hoveredLang === lang && (
                    <div className="absolute bottom-full mb-2 text-xs text-white bg-zinc-800 px-2 py-1 rounded-md">
                      {languageIcons[lang.toLowerCase()].name}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="absolute w-full h-full bg-zinc-300 rounded-lg shadow-lg flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <a
              href={link}
              target='_blank'
              className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow hover:bg-emerald-600 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
