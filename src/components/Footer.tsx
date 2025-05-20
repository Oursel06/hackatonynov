import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">ÉcoNourrir</span>
            </div>
            <p className="text-emerald-100 mb-6">
              Ensemble, luttons contre le gaspillage alimentaire pour un avenir plus durable et solidaire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-emerald-200 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#statistiques" className="text-emerald-200 hover:text-white transition-colors">Statistiques</a></li>
              <li><a href="#conseils" className="text-emerald-200 hover:text-white transition-colors">Conseils</a></li>
              <li><a href="#ressources" className="text-emerald-200 hover:text-white transition-colors">Ressources</a></li>
              <li><a href="#témoignages" className="text-emerald-200 hover:text-white transition-colors">Témoignages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Guide Anti-Gaspillage</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Recettes Zéro Déchet</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Devenir Bénévole</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-emerald-200">
              <p className="mb-2">12 Rue de l'Écologie</p>
              <p className="mb-2">75001 Paris, France</p>
              <p className="mb-4">contact@econourrir.fr</p>
              <p>+33 1 23 45 67 89</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-emerald-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ÉcoNourrir. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-emerald-300">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-emerald-400 text-sm">
          <p className="flex items-center justify-center">
            Créé avec <Heart className="mx-1" size={14} /> pour notre planète
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;