import React from 'react';
import { motion } from 'framer-motion';
import Title from './Title';
import Moi from './../assets/Moi.jpg';

function About() {
  return (
    <section id="About" className="flex justify-center items-center min-h-screen bg-zinc-800 px-4 py-20">
      <div className="flex flex-col justify-center items-center w-full max-w-6xl">
        <Title text="À propos de moi" />

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
              src={Moi}
              alt="Photo de profil"
              className="w-full h-auto max-h-[500px] object-contain rounded-lg cursor-pointer"
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
              C’est à travers les jeux vidéo que ma passion pour l’informatique a vu le jour, dès mon adolescence. Fasciné par leur conception, je me suis naturellement tourné vers des études en informatique, avec l’envie de créer des solutions concrètes et utiles.            
            </p>

            <motion.p
              className="text-zinc-500 text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              En prépa, j'ai eu l'opportunité de mener plusieurs projets, dont une application de gestion de commandes pour une entreprise de plomberie. Ce projet m’a permis de mettre en pratique mes compétences en développement tout en gérant un besoin réel d’entreprise.
            </motion.p>

            <motion.p
              className="text-zinc-500 text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Aujourd’hui, je développe ce portfolio avec <a href="https://fr.wikipedia.org/wiki/React_(JavaScript)" className="text-emerald-500 hover:text-emerald-700">React</a> et me forme à <a href="https://laravel.com/" className="text-rose-400 hover:text-rose-600">Laravel</a>, afin de maîtriser aussi bien le front-end que le back-end. Mon objectif : être autonome sur toutes les couches d'une application web.
            </motion.p>

            <motion.p
              className="text-zinc-500 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Ce qui me motive au quotidien, c’est la variété des défis techniques et humains que représente chaque projet. J’aime apprendre, résoudre des problèmes concrets et livrer des solutions qui ont un vrai impact.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
