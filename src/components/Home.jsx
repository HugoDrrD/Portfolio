import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import Title from './Title';

function Home() {
  return (
    <section id="Home" className="overflow-hidden pt-2 min-h-screen flex items-center justify-center bg-zinc-800 text-white">
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
            Salut, je m'appelle Hugo Durand. Passionné par la programmation, j'ai développé une expertise solide dans plusieurs langages comme le C et le Python, ainsi qu'avec des technologies front-end telles que React. Cette maîtrise me permet de résoudre des problèmes techniques complexes et de proposer des solutions adaptées aux besoins des utilisateurs.
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
            Je suis un grand curieux, toujours à la recherche de nouveaux défis techniques. Mon approche proactive m'amène constamment à explorer de nouvelles technologies et à rester informé des dernières innovations. J'aime apprendre et appliquer des concepts pour trouver des solutions créatives aux problèmes complexes.
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
            Au cours de mes projets, j'ai eu l'opportunité de travailler sur des applications allant des jeux vidéo aux systèmes de gestion. Ces projets m'ont permis de renforcer mes compétences en programmation, mais aussi d'appliquer des solutions informatiques concrètes pour améliorer l'efficacité des utilisateurs. J'ai l'habitude de travailler sur des problématiques complexes en équipe et de livrer des solutions qui répondent aux attentes des utilisateurs.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Home;
