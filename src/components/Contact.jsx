import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import Title from "./Title";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false); // État pour contrôler l'affichage du popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setIsPopupVisible(true); // Afficher le popup après l'envoi réussi
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setIsPopupVisible(false), 3000); // Cacher le popup après 3 secondes
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi du message.");
        }
      );
  };

  return (
    <section
      id="Contact"
      className="overflow-hidden pt-10 min-h-screen flex items-center justify-center bg-zinc-800 text-white"
    >
      <motion.div
        className="w-full max-w-5xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title text="Contactez-moi" />
        <p className="text-zinc-600 md:text-xl mb-10 px-4">
          Une question ou un projet en tête ? N'hésite pas à me contacter !
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center mt-4">
          <motion.div
            className="w-full md:w-1/2 text-left p-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Mes coordonnées</h3>
            <div className="flex items-center mb-3">
              <MdPhone size={24} className="text-emerald-500 mr-3" />
              <span className="text-lg">07 69 77 00 12</span>
            </div>
            <div className="flex items-center mb-3">
              <MdEmail size={24} className="text-emerald-500 mr-3" />
              <a
                href="mailto:hugodrd2005@gmail.com"
                className="text-lg hover:text-emerald-400 transition"
              >
                hugodrd2005@gmail.com
              </a>
            </div>
            <div className="flex space-x-4 mt-1">
              {[
                { href: "https://www.linkedin.com/in/hugo-durand-a32075332", icon: FaLinkedin },
                { href: "https://github.com/HugoDrrD", icon: FaGithub },
              ].map(({ href, icon: Icon }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-emerald-500"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={30} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 p-6"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <form onSubmit={sendEmail} className="flex flex-col space-y-4">
              {[
                { type: "text", name: "name", placeholder: "Votre nom" },
                { type: "email", name: "email", placeholder: "Votre email" },
                { type: "text", name: "subject", placeholder: "Objet du message" },
              ].map(({ type, name, placeholder }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="p-3 rounded bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              ))}
              <textarea
                name="message"
                rows="4"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 rounded bg-zinc-800 text-white border border-zinc-600 focus:outline-none focus:border-emerald-500"
              />
              <motion.button
                type="submit"
                className="p-3 rounded bg-emerald-500 text-white font-semibold flex items-center justify-center space-x-2 hover:bg-emerald-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Envoyer</span>
                <FaPaperPlane size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Modal Pop-up */}
        {isPopupVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-emerald-500 p-6 rounded-lg text-white text-center">
              <h3 className="text-2xl mb-4">Message envoyé avec succès !</h3>
              <p className="mb-4">Merci, je reviendrai vers toi bientôt.</p>
              <motion.button
                onClick={() => setIsPopupVisible(false)}
                className="px-6 py-2 bg-white text-emerald-500 rounded-full hover:bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fermer
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Contact;
