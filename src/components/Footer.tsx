import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center">
            <p className="text-emerald-100 mb-6">
            <Heart size={14} /> <strong>Pour notre planète </strong>
              Hugo, Fleming, Alexandre et yanis vous proposent <b>d'ensemble</b>, <i>lutter contre le gaspillage alimentaire pour un avenir plus durable et solidaire.</i>
              <Heart size={14} /> 
            </p>
            </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-emerald-200 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#impact" className="text-emerald-200 hover:text-white transition-colors">Impact</a></li>
              <li><a href="#statistiques" className="text-emerald-200 hover:text-white transition-colors">Statistiques</a></li>
              <li><a href="#quiz" className="text-emerald-200 hover:text-white transition-colors">Quiz</a></li>
              <li><a href="#conseils" className="text-emerald-200 hover:text-white transition-colors">Conseils</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/doc/gaspillage_alimentaire.pdf"
                  download="guide_gaspillage_alimentaire.pdf"
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  Guide Anti-Gaspillage
                </a>
              </li>
              <li><a href="#quiz" className="text-emerald-200 hover:text-white transition-colors">Testez vos connaissances</a></li>
              <li><a href="#associations" className="text-emerald-200 hover:text-white transition-colors">Nos partenaires</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;