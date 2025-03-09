import React from 'react';
import { motion } from 'framer-motion';

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  // Variants pour l'animation des liens du menu
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Fonction pour faire défiler vers une section donnée
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      className="fixed inset-0 backdrop-blur-xl flex items-center justify-center"
      initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
      animate={isMenuOpen
        ? { opacity: 1, clipPath: "circle(150% at top right)" }
        : { opacity: 0, clipPath: "circle(0% at top right)" }
      }
      transition={{ duration: 0.75, ease: "easeInOut" }}
      style={{ height: '100vh' }} // Fixe la hauteur à 100vh
    >
      <ul className="flex flex-col items-center space-y-6 text-center">
        {[
          { label: 'Accueil', id: 'Home' },
          { label: 'Projets', id: 'Projects' },
          { label: 'Compétences', id: 'Skills' },
          { label: 'À propos', id: 'About' },
          { label: 'Contact', id: 'Contact' }
        ].map(({ label, id }, index) => (
          <motion.li
            key={id}
            custom={index}
            variants={menuItemVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
          >
            <motion.button
              onClick={() => {
                scrollToSection(id);
                setTimeout(() => setIsMenuOpen(false), 150);
              }}
              className="text-xl font-semibold text-white w-48 px-6 py-3 rounded-lg bg-white/20 hover:bg-white/30 transition duration-200"
              whileHover={{
                scale: 1.05,
                backgroundColor: "oklch(0.596 0.145 163.225)",
                boxShadow: "0px 0px 6px oklch(0.596 0.145 163.225)"
              }}
              transition={{ duration: 0.1 }}
            >
              {label}
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Menu;
