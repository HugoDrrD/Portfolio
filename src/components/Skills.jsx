import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

function Skills() {
  const skills = [
    {
      "name": "C",
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/570px-C_Programming_Language.svg.png?20201031132917",
      "link": "https://fr.wikipedia.org/wiki/C_(langage)"
    },
    {
      "name": "Python",
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      "link": "https://fr.wikipedia.org/wiki/Python"
    },
    {
      "name": "HTML",
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      "link": "https://fr.wikipedia.org/wiki/HTML"
    },
    {
      "name": "CSS",
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      "link": "https://fr.wikipedia.org/wiki/CSS"
    },
    {
      "name": "React",
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "link": "https://fr.wikipedia.org/wiki/React_(JavaScript)"
    },
    {
      "name": "Tailwind CSS",
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "link": "https://fr.wikipedia.org/wiki/Tailwind_CSS"
    },
    {
      "name": "JSON",
      "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",
      "link": "https://en.wikipedia.org/wiki/JSON"
    },
    {
      "name": "GIT",
      "logoUrl": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
      "link": "https://en.wikipedia.org/wiki/Git"
    },
  ];

  return (
    <section id="Skills" className="bg-zinc-800 py-20 px-4">
      <Title text="Mes compétences" />

      <div className="max-w-5/6 md:max-w-5/6 lg:max-w-4/6 mx-auto flex flex-wrap justify-center gap-20 md:gap-40 text-zinc-500">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.2 }}  // Les éléments commencent avec une échelle réduite et une opacité faible
            whileInView={{ opacity: 1, scale: 1 }}  // L'élément devient visible et reprend sa taille originale
            viewport={{ 
              margin: "-100px",  // L'animation commence 100px avant d'entrer dans la vue
              once: true 
            }}  // L'animation se déclenche une seule fois lorsqu'il entre dans la vue
            transition={{
              type: "spring",
              damping: 10,
              duration: 0.6,
              delay: 0.4,  // Délai pour chaque logo afin qu'ils apparaissent un par un
            }}
          >
            <a href={skill.link} target="_blank" rel="noopener noreferrer">  {/* Utilisation d'un lien classique */}
              <motion.img
                src={skill.logoUrl}
                alt={skill.name}
                className="w-24 h-24 mb-4"
                whileHover={{
                  scale: 1.2,  // Effet de zoom lors du survol
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,  // Rend l'animation plus fluide au survol
                }}
              />
            </a>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
