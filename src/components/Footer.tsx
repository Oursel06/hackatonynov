import React from 'react';
import { Receipt, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-dashed border-receipt-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="font-receipt text-receipt-text">
            <p>================================</p>
            <p className="text-xl my-4">TOTAL IMPACT</p>
            <p>--------------------------------</p>
            <p>Arbres sauvés: .............. 100+</p>
            <p>CO2 évité (kg): ............ 500+</p>
            <p>Repas sauvés: ............ 1000+</p>
            <p>================================</p>
          </div>

          <div className="mt-8 space-y-2">
            <p className="font-receipt text-receipt-text flex items-center justify-center gap-2">
              <Receipt size={16} />
              TICKET ÉCOLOGIQUE - NON JETABLE
              <Receipt size={16} />
            </p>
            <p className="font-receipt text-xs text-receipt-text">
              {new Date().toLocaleString('fr-FR')}
            </p>
            <p className="font-receipt text-receipt-text flex items-center justify-center">
              Fait avec <Heart className="mx-1 text-red-500" size={14} /> par l'équipe EcoNourrir
            </p>
          </div>

          <div className="text-center mt-4 font-receipt text-receipt-text text-sm">
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