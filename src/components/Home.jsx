import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import Title from './Title';

function Home() {
  return (
    <section id="Home" className="overflow-hidden pt-24 lg:pt-4 min-h-screen flex items-center justify-center bg-zinc-800 text-white">
      {/* Conteneur principal */}
      <motion.div
        className="text-center md:mt-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title text="Bienvenue sur mon portfolio" />
        
        {/* Première section - Compétences techniques (Slide de la gauche vers la droite) */}
        <motion.div
          className="mb-10 lg:max-w-5/6 mx-auto"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex justify-center items-center mb-4">
            <FaCode size={40} className="text-blue-500" />
            <h3 className="text-2xl ml-4">Expertise technique</h3>
          </div>
          <p className="text-zinc-600 lg:max-w-4/6 mx-auto md:text-xl mb-8 px-4">
Je suis Hugo Durand, passionné de programmation depuis plusieurs années. Grâce à mes expériences, j’ai acquis une solide maîtrise de langages comme C et Python, ainsi que de technologies front-end comme React. Cette expertise me permet de concevoir des solutions efficaces, adaptées aux besoins concrets des utilisateurs.
          </p>
        </motion.div>

        {/* Deuxième section - Curiosité et apprentissage continu (Slide de la droite vers la gauche) */}
        <motion.div
          className="mb-10 lg:max-w-5/6 mx-auto"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="flex justify-center items-center mb-4">
            <FaLightbulb size={40} className="text-yellow-500" />
            <h3 className="text-2xl ml-4">Curiosité et innovation</h3>
          </div>
          <p className="text-zinc-600 lg:max-w-4/6 mx-auto md:text-xl mb-8 px-4">
 Toujours en quête de nouveaux défis, je me distingue par ma curiosité et mon esprit d’initiative. J’explore en continu de nouvelles technologies et reste à l’affût des dernières tendances. J’aime apprendre, expérimenter, et transformer ces découvertes en solutions créatives face à des problématiques complexes.          
          </p>
        </motion.div>

        {/* Troisième section - Expérience et projets variés (Slide de la gauche vers la droite) */}
        <motion.div
          className="mb-10 lg:max-w-5/6 mx-auto"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <div className="flex justify-center items-center mb-4">
            <FaProjectDiagram size={40} className="text-green-500" />
            <h3 className="text-2xl ml-4">Expérience et projets variés</h3>
          </div>
          <p className="text-zinc-600 lg:max-w-4/6 mx-auto md:text-xl mb-8 px-4">
 Mes projets m'ont amené à concevoir aussi bien des jeux vidéo que des systèmes de gestion. Ces expériences ont renforcé mes compétences techniques et m’ont permis d’apporter des solutions concrètes pour optimiser l’efficacité des utilisateurs. Habitué au travail en équipe, je sais m’adapter à des contextes variés et répondre aux exigences fonctionnelles de chaque projet.          
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Home;
