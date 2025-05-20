import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Globe, Users, Heart } from 'lucide-react';

const associations = [
  {
    id: 1,
    name: "Les Banques Alimentaires",
    description: "Réseau d'associations qui collectent, gèrent et partagent des denrées alimentaires pour aider les personnes en difficulté.",
    website: "https://www.banquealimentaire.org",
    image: "https://images.pexels.com/photos/6646866/pexels-photo-6646866.jpeg",
    type: "association"
  },
  {
    id: 2,
    name: "Too Good To Go",
    description: "Application mobile qui permet aux commerçants de vendre leurs invendus à prix réduits aux consommateurs.",
    website: "https://toogoodtogo.fr",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
    type: "platform"
  },
  {
    id: 3,
    name: "Phenix",
    description: "Entreprise sociale qui développe des solutions innovantes pour réduire le gaspillage alimentaire.",
    website: "https://wearephenix.com",
    image: "https://images.pexels.com/photos/6941884/pexels-photo-6941884.jpeg",
    type: "enterprise"
  },
  {
    id: 4,
    name: "Solaal",
    description: "Association qui facilite le don entre les agriculteurs et les associations d'aide alimentaire.",
    website: "https://www.solaal.org",
    image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg",
    type: "association"
  },
  {
    id: 5,
    name: "Réseau Vrac",
    description: "Association professionnelle dédiée au développement de la vente en vrac.",
    website: "https://reseau-vrac.org",
    image: "https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg",
    type: "association"
  }
];

const Associations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardsToShow = 3;

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

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % associations.length;
      cards.push(associations[index]);
    }
    return cards;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + associations.length) % associations.length);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'association':
        return <Users className="w-6 h-6" />;
      case 'platform':
        return <Globe className="w-6 h-6" />;
      case 'enterprise':
        return <Heart className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            Associations & Ressources
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les acteurs qui luttent contre le gaspillage alimentaire et rejoignez le mouvement.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex justify-center gap-6"
              initial={false}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <AnimatePresence initial={false} custom={direction}>
                {getVisibleCards().map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full md:w-1/3 flex-shrink-0"
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                            {getTypeIcon(item.type)}
                          </div>
                          <h3 className="ml-3 text-xl font-semibold text-emerald-800">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                          Visiter le site
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {associations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-emerald-600 w-4' : 'bg-emerald-200'
              }`}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associations;