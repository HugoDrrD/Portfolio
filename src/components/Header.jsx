import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Menu from './Menu';
import LOGO from './../assets/LOGO.png'; // Import du logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
 
  // Gestion du scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  // Fonction pour ouvrir et fermer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 sm:p-4 md:pt-14 h-14 md:h-16 backdrop-blur-md text-white z-50">
      <div className="relative w-full h-full max-w-screen-xl mx-auto sm:px-1 md:px-2 flex items-center">
        {/* Logo à gauche */}
        <motion.img
          src={LOGO}
          alt="Logo"
          className="h-8 sm:h-8 md:h-10 mr-2 sm:mr-3" // Ajuster la taille et la marge pour les petits écrans
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Div pour le titre */}
        <motion.div
          className="text-3xl sm:text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hugo Durand
        </motion.div>

        {/* Hamburger button */}
        <motion.button
          className="absolute top-1/2 right-0 -translate-y-1/2 flex flex-col justify-center items-center z-50 p-1 cursor-pointer"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Menu"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.span
            className="block w-8 h-1 rounded-full mb-1.5"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 10 : 0,
              backgroundColor: isHovered
                ? (isMenuOpen ? "oklch(0.696 0.17 162.48)" : "oklch(0.979 0.021 166.113)")
                : "#fff"
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="block w-8 h-1 rounded-full mb-1.5"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              x: isHovered ? 10 : 0,
              backgroundColor: isHovered
                ? (isMenuOpen ? "oklch(0.979 0.021 166.113)" : "oklch(0.696 0.17 162.48)")
                : "#fff"
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="block w-8 h-1 rounded-full"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -10 : 0,
              backgroundColor: isHovered
                ? (isMenuOpen ? "oklch(0.696 0.17 162.48)" : "oklch(0.979 0.021 166.113)")
                : "#fff"
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>

        {/* Menu mobile */}
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
