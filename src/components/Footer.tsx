import React, { useState, useEffect } from 'react';
import { Receipt, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [wastedFood, setWastedFood] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const INTERVAL_SECONDS = 5;
    const FOOD_WASTE_PER_SECOND = 41200;
    
    const timer = setInterval(() => {
      const secondsElapsed = Math.floor((Date.now() - startTime) / 1000);
      // On multiplie par le nombre de secondes dans l'intervalle pour avoir le total
      const foodWasted = secondsElapsed * FOOD_WASTE_PER_SECOND;
      setWastedFood(foodWasted);
    }, INTERVAL_SECONDS * 1000); // Conversion en millisecondes

    return () => clearInterval(timer);
  }, []);

  // Fonction pour formater les grands nombres
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('fr-FR').format(Math.floor(num));
  };

  return (
    <footer className="border-t border-dashed border-receipt-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="font-receipt text-receipt-text">
            <p>================================</p>
            <p className="text-2xl my-4">TOTAL IMPACT</p>
            <p>--------------------------------</p>
            <p className="text-xl">Nourriture gaspillée dans</p>
            <p className="text-xl">le monde pendant votre visite</p>
            <p className="text-4xl my-2 text-red-600">{formatNumber(wastedFood)} kg</p>
            <p className="text-lg text-receipt-text/60">(Mise à jour toutes les 5 secondes)</p>
            <p>================================</p>
          </div>

          <div className="mt-8 space-y-2">
            <p className="text-xl font-receipt text-receipt-text flex items-center justify-center gap-2">
              <Receipt size={16} />
              TICKET ÉCOLOGIQUE - NON JETABLE
              <Receipt size={16} />
            </p>
            <p className="font-receipt text-xl text-receipt-text">
              {new Date().toLocaleString('fr-FR')}
            </p>
            <p className="font-receipt text-xl text-receipt-text mb-2">
              Par Yanis, Alexandre, Fleming et Hugo
            </p>
            <p className="text-xl font-receipt text-receipt-text flex items-center justify-center">
              Fait avec <Heart className="mx-1 text-red-500" size={14} /> pour notre planète
            </p>
          </div>

          <div className="text-center mt-4 font-receipt text-receipt-text text-xl">
            <p>*** CONSERVEZ CE TICKET ***</p>
            <p>IL REPRÉSENTE VOTRE ENGAGEMENT</p>
            <p>POUR UN MONDE MEILLEUR</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;