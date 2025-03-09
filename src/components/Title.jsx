import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

const Title = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Effet pour l'animation d'écriture
  useEffect(() => {
    if (!isInView) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 75); // Vitesse de l'écriture (100ms par caractère)

      return () => clearTimeout(timeout);
    }
  }, [isInView, currentIndex, text]);

  // Effet pour le clignotement du curseur
  useEffect(() => {
    if (!isInView) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530); // Vitesse de clignotement du curseur

    return () => clearInterval(cursorInterval);
  }, [isInView]);

  return (
    <div ref={ref} className="max-h-20 flex justify-center items-center h-screen mb-20">
      <h2 className="text-white text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-center">
        {displayedText}
        {isInView && (
          <span
            className={`inline-block w-0.5 h-9 md:h-11 bg-white ml-2 translate-y-1 transition-opacity duration-200 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
          ></span>
        )}
      </h2>
    </div>
  );
};

export default Title;
