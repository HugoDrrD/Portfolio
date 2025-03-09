import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import Moi from './../assets/Moi.jpg'; // Importation de l'image

function About() {
  return (
    <section id="About" className="flex justify-center items-center min-h-screen bg-zinc-800 px-4 py-20">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl">
        {/* Titre centré au-dessus de l'image et du texte */}
        <Title text="À propos de moi" />

        {/* Div contenant l'image et le texte */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full space-x-0 lg:space-x-12">
          {/* Image */}
          <motion.div
            className="flex justify-center lg:w-1/2 w-full mb-6 lg:mb-0"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src = {Moi} // Utilisation de l'import pour l'image
              alt="Photo de profil"
              className="w-full h-auto max-h-[500px] object-contain rounded-lg cursor-pointer" // Les propriétés max-w et max-h permettent à l'image de s'adapter tout en conservant ses proportions
            />
          </motion.div>

          {/* Texte */}
          <motion.div
            className="lg:w-1/2 w-full text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-zinc-500 text-lg mb-4">
              Depuis mes 12 ans, je suis passionné par l'informatique, notamment à travers le développement de jeux vidéo. Cette passion m'a naturellement guidé vers des études en informatique, où j'ai approfondi mes compétences techniques et exploré la transformation digitale.
            </p>

            <motion.p
              className="text-zinc-500 text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lors de mes années en prépa, j'ai participé à des projets, dont un particulièrement marquant : le développement d'une application pour la gestion des commandes d'une entreprise de plomberie, où j'ai pu allier développement et gestion de projet.
            </motion.p>

            <motion.p
              className="text-zinc-500 text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Je me forme actuellement à <a href="https://fr.wikipedia.org/wiki/React_(JavaScript)" className='text-emerald-500 hover:text-emerald-700'>React</a> pour devenir autonome dans la gestion de projets, en étant capable de gérer à la fois le front-end et le back-end.
            </motion.p>

            <motion.p
              className="text-zinc-500 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Ce que j'apprécie dans la gestion de projets, c'est la diversité des défis qu'ils représentent. Chaque projet est unique et me permet de développer des compétences variées, que ce soit sur le plan technique, en gestion, ou en communication.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
