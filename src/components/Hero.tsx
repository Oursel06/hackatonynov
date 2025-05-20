import React from 'react';
import { ArrowDown, Store, Leaf, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="relative py-16 bg-receipt-paper">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo et en-tête */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Store className="w-10 h-10 text-receipt-text" />
            <Leaf className="w-10 h-10 text-receipt-text" />
          </div>

          {/* En-tête du ticket */}
          <div className="font-receipt text-receipt-text">
            <p>================================</p>
            <h1 className="text-4xl md:text-5xl mb-4 mt-4">
              ALERTE GASPILLAGE
            </h1>
            <p>================================</p>
          </div>

          {/* Contenu principal */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="font-receipt text-receipt-text flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              <p className="text-xl">URGENCE PLANETAIRE</p>
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="space-y-4 font-receipt text-receipt-text">
              <p>--------------------------------</p>
              <p className="text-lg">CHAQUE ANNÉE DANS LE MONDE:</p>
              <p>1.3 MILLIARD DE TONNES GASPILLÉES</p>
              <p>VALEUR: 20 MILLIARDS EUR</p>
              <p>--------------------------------</p>
            </div>

            {/* Call to action */}
            <div className="pt-8 flex flex-col items-center gap-4">
              <button className="bg-receipt-text text-receipt-paper hover:bg-receipt-text/80 px-8 py-3 rounded-full font-receipt text-lg transition-colors">
                AGIR MAINTENANT
              </button>
              <button className="border-2 border-receipt-text text-receipt-text hover:bg-receipt-text/10 px-8 py-3 rounded-full font-receipt text-lg transition-colors">
                EN SAVOIR PLUS
              </button>
            </div>
          </div>
        </div>

        {/* Flèche de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#statistiques" className="text-receipt-text/80 hover:text-receipt-text transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </div>

        {/* Pointillés latéraux */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-receipt-dots bg-dots-sm"></div>
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-receipt-dots bg-dots-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
