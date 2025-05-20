import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Leaf, Bird } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Humains",
    description: "Découvrez l'impact du gaspillage alimentaire sur les communautés humaines et les solutions proposées.",
    image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
    icon: Users,
    color: "emerald"
  },
  {
    id: 2,
    name: "Faune",
    description: "Explorez comment le gaspillage alimentaire affecte la vie sauvage et les écosystèmes animaux.",
    image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg",
    icon: Bird,
    color: "amber"
  },
  {
    id: 3,
    name: "Flore",
    description: "Comprenez l'impact sur la biodiversité végétale et l'importance des ressources naturelles.",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
    icon: Leaf,
    color: "emerald"
  }
];

const Categories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + categories.length) % categories.length);
  };

  return (
    <section className="py-20 bg-emerald-100 rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            Impact sur notre Écosystème
          </h2>
          <p className="text-lg text-emerald-100">
            Le gaspillage alimentaire affecte tous les aspects de notre environnement.
            Découvrez comment chaque partie de notre écosystème est touchée.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${categories[currentIndex].image})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-full bg-${categories[currentIndex].color}-100 flex items-center justify-center`}>
                      {React.createElement(categories[currentIndex].icon, {
                        className: `w-10 h-10 text-${categories[currentIndex].color}-600`
                      })}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">
                    {categories[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    {categories[currentIndex].description}
                  </p>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                    En savoir plus
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg text-emerald-600 hover:text-emerald-700 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg text-emerald-600 hover:text-emerald-700 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-4' : 'bg-emerald-200'
              }`}
              aria-label={`Aller à la catégorie ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;